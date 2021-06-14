<template>
  <div>
    <div>
      <input v-model="name" placeholder="姓名">
    </div>
    <div>
      <input v-model="tel" placeholder="电话号码">
    </div>
    <div>
      <input v-model="passwd" placeholder="密码">
    </div>
    <div>
      <button v-on:click="doRegister">注册</button>
    </div>
  </div>
</template>

<script>
import {CreateClient} from "@/api/client";
import {checkTel} from "@/util/reg";
import {stringToUint8Array} from "@/util/converter";
var proto = require('../proto/create_client_pb')
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
      let client = new proto.Client()
      client.setName(this.name)
      client.setTel(this.tel)
      client.setPasswd(this.passwd)
      let request = new proto.CreateClientRequest()
      request.setClient(client)
      if(!checkTel(this.tel)){
        window.alert('illegal phone number')
        return
      }
      CreateClient(request.toObject(),{},this.handleResponse)
    },
    handleResponse:function (response) {
      var resp = new proto.CreateClientResponse.deserializeBinary(stringToUint8Array(response.data))

    }
  }
}

</script>