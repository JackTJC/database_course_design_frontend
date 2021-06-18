<template>
  <div>
    <div class="logout">
      <vxe-button round @click="doLogout">注销</vxe-button>
    </div>
    <div class="admin">
      <vxe-button round @click="
const {toAdminGoods} = require('@/util/skip');
toAdminGoods()">添加商品</vxe-button>
      <vxe-button round @click="
const {toAdminOrder} = require('@/util/skip');
toAdminOrder()">查看用户订单</vxe-button>
      <vxe-button round @click="
const {toAdminUserList} = require('@/util/skip');
toAdminUserList()">查看已注册用户</vxe-button>
    </div>
  </div>
</template>
<script>
import {toLogin} from "@/util/skip";
import {identifyAdmin} from "@/util/authority";
import {delCookie} from "@/util/authority";

export default {
  name:'Admin',
  mounted() {
    identifyAdmin(this.$cookies,this.$fire)
    console.log(this.$cookies.get('user-name'))
  },
  methods:{
    doLogout:function () {
      delCookie(this.$cookies)
      this.$fire({
        title:"Success",
        type:"success"
      })
      toLogin()
    }
  }
}
</script>

<style>
.admin{
  padding: 400px 0;
  text-align: center;
}
.logout{
  float: right;
}
</style>