<template>
  <div>
<vxe-table
:align="'center'"
:data="orderList">
  <vxe-table-column type="seq" width="60"></vxe-table-column>
  <vxe-table-column field="goodsName" title="GoodsName"></vxe-table-column>
  <vxe-table-column field="price" title="Price"></vxe-table-column>
  <vxe-table-column field="num" title="Num"></vxe-table-column>
  <vxe-table-column field="orderStatus" title="Status"></vxe-table-column>
</vxe-table>
  </div>
</template>
<script>
import {QueryOrder} from "@/api/order";
import {errHandle} from "@/util/err";
var query_order_proto=require('../proto/query_order_pb')
var common = require('../proto/common_pb')
export default {
  name:'UserOrder',
  data:function () {
    return{
      orderList:[
        {goods_name:"test_name",price:"test price",num:"1",order_status:"test"}
      ]
    }
  },
  mounted() {
    var req = new query_order_proto.goods.QueryOrderRequest()
    var order = new common.goods.Order()
    order.setClientId(this.$cookies.get('user-id'))
    req.setOrder(order)
    const handleResp = this.handlerResp
    QueryOrder(req.serializeBinary(),function (response) {
      response.data.arrayBuffer().then(handleResp).then(errHandle)
    })
  },
  methods:{
    handlerResp:function (data) {
      var resp = new query_order_proto.QueryOrderResponse.deserializeBinary(new Uint8Array(data))
      console.log(resp.toObject())
    }
  }
}
</script>