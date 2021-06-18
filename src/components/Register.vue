<template>
  <div class="register">
    <div>
      <vxe-input v-model="name" placeholder="姓名"></vxe-input>
    </div>
    <div>
      <vxe-input v-model="tel" placeholder="电话号码"></vxe-input>
    </div>
    <div>
      <vxe-input v-model="passwd" placeholder="密码" type="password"></vxe-input>
    </div>
    <div>
      <vxe-button round v-on:click="doRegister">注册</vxe-button>
    </div>
  </div>
</template>

<script>
import {CreateClient} from "@/api/client";
import {checkTel} from "@/util/reg";
import {errHandle} from "@/util/err";
var proto = require('../proto/create_client_pb')
var common = require('../proto/common_pb')
export default {
  name:'Register',
  props:[

  ],
  data:function () {
    return {
      name:'',
      tel:'',
      passwd:''
    }
  },
  methods:{
    doRegister:function () {
      if (!this.checkParams()){
        return;
      }
      let client = new proto.Client()
      client.setName(this.name)
      client.setTel(this.tel)
      client.setPasswd(this.passwd)
      let request = new proto.CreateClientRequest()
      request.setClient(client)
      const handleResp = this.handleResp
      CreateClient(request.serializeBinary(),function (response) {
        response.data.arrayBuffer().then(handleResp).catch(errHandle)
      })
    },
    handleResp:function (data) {
      var resp = new proto.CreateClientResponse.deserializeBinary(new Uint8Array(data))
      //todo校验用户重复创建
      if(resp.getBaseResp().getErrNo()!==common.ErrNo.ERRNO_SUCCESS){
        if(resp.getBaseResp().getErrNo()===common.ErrNo.ERRNO_USER_HAS_EXISTED){
          this.$confirm("User already exist, do you want to login?").then(()=>{
            self.location("/login")
          })
          return;
        }
        this.$fire({
          title:"Internal Server Error",
          type:"error"
        })
        return;
      }
      this.$confirm("register success, do you want to login?","Success","success").then(()=>{
        self.location('/login')
      })
    },
    //校验参数
    checkParams:function (){
      if(!checkTel(this.tel)){
        this.$fire({
          title:"Illegal Phone Number",
          type:"error"
        })
        return false
      }
      if(this.passwd.length<8){
        this.$fire({
          title:"Length of Password isn't enough",
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
.register{
  padding: 400px 0;
  text-align: center;
}
</style>