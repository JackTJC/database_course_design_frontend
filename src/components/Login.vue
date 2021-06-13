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
var proto = require('../proto/query_client_pb')
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
      QueryClient(req.toObject())
    }
  }
}
</script>