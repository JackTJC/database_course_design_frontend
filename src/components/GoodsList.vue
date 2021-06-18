<template>
  <div>
    <p>
      <vxe-radio-group v-model="category">
        <vxe-radio label="1" content="食品"></vxe-radio>
        <vxe-radio label="2" content="衣物"></vxe-radio>
        <vxe-radio label="3" content="手机"></vxe-radio>
        <vxe-radio label="4" content="笔记本电脑"></vxe-radio>
      </vxe-radio-group>
    </p>
    <p>
      <vxe-radio-group v-model="priceRange">
        <vxe-radio label="1" content="0-50"></vxe-radio>
        <vxe-radio label="2" content="50-100"></vxe-radio>
        <vxe-radio label="3" content="100-150"></vxe-radio>
      </vxe-radio-group>
    </p>
    <div>
      <vxe-input v-model="name" placeholder="名称"></vxe-input>
      <vxe-input v-model="desc" placeholder="描述信息"></vxe-input>
      <vxe-button round v-on:click="doSearch" >筛选</vxe-button>
    </div>
    <div>
      <vxe-table
          border
          height="300"
          ref="goodsSelect"
          :align="tableAlign"
          :radio-config="{highlight:true}"
          :data="goodsList"
          @radio-change="radioChangeEvent">
        <vxe-table-column type="radio" width="60">
          <template #header>
            <vxe-button type="text" @click="clearRadioRowEevnt" :disabled="!selectRow">取消</vxe-button>
          </template>
        </vxe-table-column>
        <vxe-table-column field="goodsId" title="ID"></vxe-table-column>
        <vxe-table-column field="goodsName" title="Name"></vxe-table-column>
        <vxe-table-column field="goodsDescription" title="Desc"></vxe-table-column>
        <vxe-table-column field="pictureUrl" title="Image" type="html" show-overflow></vxe-table-column>
        <vxe-table-column field="goodsType" title="Type"></vxe-table-column>
        <vxe-table-column field="price" title="Price"></vxe-table-column>
        <vxe-table-column field="discount" title="Discount"></vxe-table-column>
        <vxe-table-column field="inventory" title="Inventory"></vxe-table-column>
      </vxe-table>
    </div>
    <div>
      <vxe-button round v-on:click="doBuyGoods" >购买</vxe-button>
    </div>
  </div>
</template>


<script>
import { QueryGoods} from "@/api/goods";
import {CreateOrder} from "@/api/order";
import {errHandle} from "@/util/err";
var query_goods_proto = require('../proto/query_goods_pb')
var create_order_proto = require('../proto/create_order_pb')
var common = require('../proto/common_pb')
export default {
  name:'GoodsList',
  data () {
    return {
      tableAlign:"center",
      goodsList:[

      ],
      selected:{},
      priceRange:0,
      category: 0,
      name:"",
      desc:"",
      selectRow: null,
    }
  },
  mounted() {
    this.doSearch()
  },
  methods:{
    doSearch:function () {
      var req = new query_goods_proto.QueryGoodsRequest()
      req.setGoodsType(this.category)
      req.setLimit(100)//确认能全部拉下来
      if (this.name.length>0){
        req.setName(this.name)
      }
      if (this.desc.length>0){
        req.setDescription(this.name)
      }
      switch (this.priceRange){
        case "1":
          req.setPriceHigh(50)
          break
        case "2":
          req.setPriceHigh(100)
          req.setPriceLow(50)
          break
        case "3":
          req.setPriceHigh(150)
          req.setPriceLow(100)
          break
        default:
          break
      }
      const handleResp = this.handleQueryGoodsResp
      QueryGoods(req.serializeBinary(),function (response) {
        response.data.arrayBuffer().then(handleResp).catch(errHandle)
      })
    },
    handleQueryGoodsResp:function (data) {
      var resp = new query_goods_proto.QueryGoodsResponse.deserializeBinary(new Uint8Array(data))
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
          title:"Internal Server Error",
          text:resp.getBaseResp().getMsg(),
          type:"error"
        })
        return
      }
      resp.getGoodsListList().map(
          (goods)=>{
            goods.setPictureUrl(`<img height="100" src="${goods.getPictureUrl()}">`)
            this.goodsList.push(goods.toObject())
          }
      )
      console.log(this.goodsList)
      console.log(resp.toObject())
    },
    // getSelected:function () {
    //   this.selected=this.$refs.goodsSelect.getRadioRecord()
    //   console.log(this.selected)
    // },
    //购买商品动作
    doBuyGoods:function () {
      this.selected=this.$refs.goodsSelect.getRadioRecord()
      var req = new create_order_proto.CreateOrderRequest()
      var order = new common.Order()
      order.setGoodsId(this.selected.id)
      order.setClientId(this.$cookies.get('user-id'))
      order.setNum(1)
      order.setOrderStatus(common.OrderStatus.ORDERSTATUS_WAITPAY)
      req.setOrder(order)
      const handleResp = this.handleCreateOrderResp
      CreateOrder(req.serializeBinary(),function (response) {
        response.data.arrayBuffer().then(handleResp).catch(errHandle)
      })
    },
    radioChangeEvent ({ row }) {
      this.selectRow = row
      console.log('单选事件')
    },
    clearRadioRowEevnt () {
      this.selectRow = null
      this.$refs.goodsSelect.clearRadioRow()
      console.log('clear radio row event')
    },
    //处理请求返回
    handleCreateOrderResp:function (data) {
      var resp = new create_order_proto.CreateOrderResponse.deserializeBinary(new Uint8Array(data))
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
          title:"Internal Server Error",
          text:resp.getBaseResp().getMsg(),
          type:"error"
        })
      }
      this.$fire({
        title:"Success",
        type:"success"
      })
      //刷新页面
      location.reload()
    }
  }
}

</script>

