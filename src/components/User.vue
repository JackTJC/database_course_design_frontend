<template>
  <div>
    <div class="logout">
      <vxe-button round @click="doLogout">注销</vxe-button>
    </div>
    <div class="user">
      <vxe-button round @click="
const {toUserGoodsList} = require('@/util/skip');
toUserGoodsList()">购买商品</vxe-button>
      <vxe-button round @click="
const {toUserOrder} = require('@/util/skip');
toUserOrder()">查看我的订单</vxe-button>
      <vxe-button round @click="
const {toUserProfile} = require('@/util/skip');
toUserProfile()">我的信息</vxe-button>
    </div>
  </div>

</template>

<script>
import {toLogin} from "@/util/skip";
import {delCookie} from "@/util/authority";

export default {
  name:'User',
  data:function () {

  },
  methods:{
    doLogout:function() {
      delCookie(this.$cookies)
      this.$fire({
        title:"Success",
        type:"success"
      })
      toLogin()
    }
  },
}
</script>

<style>
.user{
  padding: 400px 0;
  text-align: center;
}
.logout{
  float: right;
}
</style>