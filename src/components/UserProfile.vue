<template>
  <div class="profile">
    <div>
      <vxe-button type="text" status="primary" content="">{{"Name:"+this.userName}}</vxe-button>
    </div>
    <div>
      <vxe-button type="text" status="primary" content="">{{"Tel:"+this.userTel}}</vxe-button>
    </div>
  </div>
</template>
<script>
import { identifyCommonUser} from "@/util/authority";
export default {
  name:'UserProfile',
  data:function () {
    return {
      userId:this.$cookies.get('user-id'),
      userName:this.$cookies.get('user-name'),
      userTel:this.$cookies.get('user-tel'),
    }
  },
  mounted() {
    identifyCommonUser()
  }
}
</script>

<style>
.profile{
  padding: 400px 0;
  text-align: center;
}
.profile div{
  /*background: cornsilk;*/
}
</style>