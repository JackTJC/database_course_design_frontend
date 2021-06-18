<template>
  <div class="login">
    <div>
      <vxe-input v-model="tel" placeholder="电话号码"></vxe-input>
    </div>
  <div>
    <vxe-input v-model="passwd" placeholder="密码" type="password"></vxe-input>
  </div>
    <div>
      <vxe-button round v-on:click="doLogin">登录</vxe-button>
      <vxe-button round @click="
const {toRegister} = require('@/util/skip');
toRegister()">注册</vxe-button>
    </div>
  </div>
</template>

<script>
import {QueryClient} from "@/api/client";
import {checkTel} from "@/util/reg";
import {toRegister,toAdmin,toUser} from "@/util/skip";
import {setCookie} from "@/util/authority";
import {errHandle} from "@/util/err";
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
      if (!this.checkParams()){
        return;
      }
      let req  =   new proto.QueryClientRequest()
      req.setTel(this.tel)
      req.setLimit(1)
      const handleResp = this.handleResp
      QueryClient(req.serializeBinary(),function (response) {
        response.data.arrayBuffer().then(handleResp).catch(errHandle)
      })
    },
    handleResp:function (data){
      const resp=new proto.QueryClientResponse.deserializeBinary(new Uint8Array(data))
      //校验请求是否成功
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        this.$fire({
          title:"Server Internal Error",
          text:resp.getBaseResp().getMsg(),
          type:"error"
        })
        return
      }
      //校验是否有该用户
      var clientList = resp.getClientListList()
      if(clientList.length===0){
        this.$confirm("User doesn't exist,do you want to register?").then(()=>{
          toRegister()
        })
        return;
      }
      //校验密码是否正确
      var client = clientList[0]
      if (client.getPasswd()===this.passwd){
        if (client.getName()==="admin"){
          this.$fire({
            title:"Login Success",
            type:"success",
          })
         setCookie(this.$cookies,client.getClientId(),client.getName(),client.getTel())
          toAdmin()
        }else{
          //普通用户界面
          this.$fire({
            title:"Login Success",
            type:"success"
          })
          setCookie(this.$cookies,client.getClientId(),client.getName(),client.getTel())
          toUser()
        }
      }else{
        this.$fire({
          title:"Wrong Password",
          type:"error"
        })
      }
    },
    checkParams:function () {
      if(!checkTel(this.tel)){
        this.$fire({
              title:"Illegal Phone Number",
              type:"error",
            }
        )
        return false
      }
      if (this.passwd.length===0){
        this.$fire({
          title:"Please Input Password",
          type:"error"
        })
        return false
      }
      return true
    }
  }
}
</script>

<style>
.login{
  padding: 400px 0;
  text-align: center;
}
</style>