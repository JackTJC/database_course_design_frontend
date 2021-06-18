<template>
  <div>
    <vxe-table
        :align="'center'"
        :data="userList">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="tel" title="Tel"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import {QueryClient} from "@/api/client";
import {errHandle} from "@/util/err";
var proto = require('../proto/query_client_pb')
var common =require('../proto/common_pb')
export default {
  name:'AdminUserList',
  data:function (){
    return {
      userList:[

      ]
    }
  },
  methods:{
    handleResp(data){
      var resp = new proto.QueryClientResponse.deserializeBinary(new Uint8Array(data))
      console.log(resp.toObject())
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
          title:"Internal Server Error",
          text:resp.getBaseResp().getMsg(),
          type:"error"
        })
        window.location.back()
      }
      resp.getClientListList().map(
          (client)=>{
            console.log(client.toObject())
            this.userList.push(client.toObject())
          }
      )
    },
  },
  mounted() {
    var req = new proto.QueryClientRequest()
    req.setLimit(100)
    req.setOffset(0)
    const handleResp = this.handleResp
    QueryClient(req.serializeBinary(),function (response) {
      response.data.arrayBuffer().then(handleResp).catch(errHandle)
    })
  },
}
</script>