<template>
  <div>
    <div>
      <input v-model="tel" placeholder="电话号码">
    </div>
  <div>
    <input v-model="passwd" placeholder="密码">
  </div>
    <div>
      <button v-on:click="doLogin">登录</button>
    </div>
  </div>
</template>

<script>
import {QueryClient} from "@/api/client";
import {stringToUint8Array} from "@/util/converter";
import {checkTel} from "@/util/reg";
var proto = require('../proto/query_client_pb');
var common = require('../proto/common_pb')
export default {
  name:'Login',
  props:{

  },
  data:function (){
    return {
      tel:'',
      passwd:''
    }
  },
  methods:{
    doLogin:function (){
      let req  =   new proto.QueryClientRequest()
      req.setTel(this.tel)
      req.setLimit(1)
      QueryClient(req.serializeBinary(),{},this.handleResp)
    },
    doRegister:function () {

    },
    handleResp:function (response){
      if(!checkTel(this.tel)){
        window.alert('illegal phone number')
        return
      }
      const resp=new proto.QueryClientResponse.deserializeBinary(stringToUint8Array(response.data))
      //校验请求是否成功
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        window.alert(resp.getBaseResp().getMsg())
        return
      }
      //校验是否有该用户
      var clientList = resp.getClientListList()
      if(clientList.length===0){
        window.alert("user doesn't exist")
        return;
      }
      //校验密码是否正确
      var client = clientList[0]
      if (client.getPasswd()===this.passwd){
        if (client.getName()==="admin"){
          //跳转到管理界面
          console.log('you are admin')
          self.location='/admin'
        }else{
          //普通用户界面
          console.log('you are common user')
        }
      }else{
        window.alert("wrong passwd")
      }
    }
  }
}
</script>