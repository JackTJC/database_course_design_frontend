<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button icon="fa fa-plus" @click="insertEvent()">增加一行</vxe-button>
        <!--        <vxe-button @click="insertEvent(goodsTable[2])">在第3行插入并激活 Sex 单元格</vxe-button>-->
        <!--        <vxe-button @click="insertEvent(-1)">在最后行插入</vxe-button>-->
                <vxe-button @click="$refs.goodsTable.removeCheckboxRow()">删除选中</vxe-button>
<!--        <vxe-button @click="getSelectionEvent">获取选中</vxe-button>-->
<!--        <vxe-button @click="getInsertEvent">获取新增</vxe-button>-->
<!--        <vxe-button icon="fa fa-save" @click="saveEvent">保存</vxe-button>-->
      </template>
    </vxe-toolbar>

    <vxe-table
        border
        show-overflow
        keep-source
        ref="goodsTable"
        max-height="400"
        :data="goodsTable"
        :edit-config="{trigger: 'click', mode: 'cell', icon: 'fa fa-pencil', showStatus: true}">
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"  :edit-render="{name: 'input', defaultValue: '商品名'}"></vxe-table-column>
      <vxe-table-column field="desc" title="Desc" :edit-render="{name: 'input',defaultValue:'商品描述'}"></vxe-table-column>
      <vxe-table-column field="picture" title="Image"  :edit-render="{name: 'input', defaultValue: '图片链接'}"></vxe-table-column>
      <vxe-table-column field="type" title="Type" :edit-render="{name:'$select',options:typeList}"></vxe-table-column>
      <vxe-table-column field="price" title="Price"  :edit-render="{name: 'input', defaultValue:100}"></vxe-table-column>
      <vxe-table-column field="discount" title="Discount" :edit-render="{name:'input',defaultValue:10}"></vxe-table-column>
      <vxe-table-column field="inventory" title="Inventory" :edit-render="{name:'input',defaultValue:100}"></vxe-table-column>
    </vxe-table>
    <div>
      <vxe-button round @click="createGoods">新增商品</vxe-button>
    </div>
  </div>
</template>

<script>
import {MCreateGoods} from "@/api/goods";
import {errHandle} from "@/util/err";
var common = require("../proto/common_pb")
var proto = require('../proto/m_create_goods_pb')
export default {
  name:'AddGoods',
  data () {
    return {
      goodsTable: [
        // {id:"1",name:"test_name",desc:"test_desc",picture:"test_img",type:1,type2:['2'],price: 100,discount: 10,inventory: 100},
      ],
      typeList: [
        { label: '食品', value: 1 },
        { label: '衣物', value: 2 },
        { label: '手机',value: 3},
        { label: '笔记本电脑',value: 4},
      ]
    }
  },
  methods: {
    async insertEvent (row) {
      const $table = this.$refs.goodsTable
      const record = {}
      const { row: newRow } = await $table.insertAt(record, row)
      await $table.setActiveCell(newRow, 'sex')
    },
    // getInsertEvent () {
    //   const $table = this.$refs.goodsTable
    //   const insertRecords = $table.getInsertRecords()
    //   console.log(insertRecords)
    // },
    // getSelectionEvent () {
    //   const $table = this.$refs.goodsTable
    //   const selectRecords = $table.getCheckboxRecords()
    //   console.log(selectRecords)
    // },
    // saveEvent () {
    //   const $table = this.$refs.goodsTable
    //   const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    //   console.log(insertRecords)
    //   console.log(removeRecords)
    //   console.log(updateRecords)
    // },
    createGoods(){
      let goodsList=[]
      const $table = this.$refs.goodsTable
      const insertRecords = $table.getInsertRecords()
      insertRecords.map(goods=>{
        var pbGoods = new proto.Goods()
        pbGoods.setGoodsName(goods.name)
        pbGoods.setGoodsDescription(goods.desc)
        pbGoods.setPictureUrl(goods.picture)
        pbGoods.setPrice(goods.price)
        pbGoods.setInventory(goods.inventory)
        pbGoods.setDiscount(goods.discount)
        pbGoods.setGoodsType(goods.type)
        goodsList.push(pbGoods)
      })
      const req=new proto.MCreateGoodsRequest()
      req.setGoodsListList(goodsList)
      console.log(req.toObject())
      MCreateGoods(req.serializeBinary(),function (response) {
        response.data.arrayBuffer().then(this.handleResp).catch(errHandle)
      })
    },
    handleResp(data){
      var resp = new proto.MCreateGoodsResponse.deserializeBinary(new Uint8Array(data))
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
              title:"Server Internal Error",
              text:resp.getBaseResp().getMsg(),
              type:"error"
        })
        return
      }
      this.$fire({
        title:"Success",
        type:"success"
      })
    }
  }
}
</script>
