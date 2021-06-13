<template>
  <div>
    <ul>
      <li v-for="goods in goodsList" :key="goods.name">
        {{ goods}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'GoodsList',
  data:function () {
    return{
      goodsList:{}
    }
  }
}
</script>