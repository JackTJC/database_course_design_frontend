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
import {identifyCommonUser} from "@/util/authority";
var query_order_proto=require('../proto/query_order_pb')
var common = require('../proto/common_pb')
export default {
  name:'UserOrder',
  data:function () {
    return{
      orderList:[]
    }
  },
  mounted() {
    identifyCommonUser(this.$cookies,this.$fire)
    var req = new query_order_proto.QueryOrderRequest()
    var order = new common.Order()
    order.setClientId(parseInt(this.$cookies.get('user-id'),10))
    req.setOrder(order)
    req.setLimit(100)
    req.setOffset(0)
    const handleResp = this.handleResp
    QueryOrder(req.serializeBinary(),function (response) {
      response.data.arrayBuffer().then(handleResp).then(errHandle)
    })
  },
  methods:{
    handleResp:function (data) {
      var resp = new query_order_proto.QueryOrderResponse.deserializeBinary(new Uint8Array(data))
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
          title:"Internal Server Error",
          text:resp.getBaseResp().getMsg(),
          type:"error"
        })
        return
      }
      resp.getOrderListList().map(
          (order)=>{
            this.orderList.push(order.toObject())
          }
      )
    }
  }
}
</script>