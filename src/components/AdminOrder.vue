<template>
  <div>
    <vxe-table
        :align="'center'"
        :data="orderList">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="orderId" title="ID"></vxe-table-column>
      <vxe-table-column field="goodsId" title="GoodsID"></vxe-table-column>
      <vxe-table-column field="clientId" title="ClientID"></vxe-table-column>
      <vxe-table-column field="goodsName" title="GoodsName"></vxe-table-column>
      <vxe-table-column field="price" title="Price"></vxe-table-column>
      <vxe-table-column field="num" title="Num"></vxe-table-column>
      <vxe-table-column field="orderStatus" title="Status"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import {errHandle} from "@/util/err";
import {QueryOrder} from "@/api/order";

var proto = require('../proto/query_order_pb')
var common = require('../proto/common_pb')
export default {
  name:'AdminOrder',
  data:function (){
    return{
      orderList:[]
    }
  },
  methods:{
    doQuery:function () {
      var req = new proto.QueryOrderRequest()
      req.setLimit(100)
      req.setOffset(0)
      QueryOrder(req.serializeBinary(),function (response) {
        response.data.arrayBuffer().then().catch(errHandle)
      })
    },
    handleResp:function (data) {
      var resp = new proto.QueryGoodsResponse.deserializeBinary(new Uint8Array(data))
      console.log(resp.toObject())
    }
  }
}
</script>