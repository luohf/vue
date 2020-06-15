<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环，一定要使用key -->
      <!-- 将来，谁使用此轮播图组件，谁就要传lunbotuList过来 -->
      <!-- 此时，lunbotuList应该是父组件向子组件传值 -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url"> -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
       
        <img :src="item.img" alt :class="{total:is_total}" />
      </mt-swipe-item>
      <!-- <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["lunbotuList", "is_total"]
};
</script>


<style lang="scss" scoped>
//轮播图的类

//轮播图高度
.mint-swipe {
  height: 200px;
  //轮播图的每一项
  .mint-swipe-item {
    text-align: center;
    //轮播图的图片
    img {
      height: 100%;
    }
  }
}

.total {
  width: 100%;
}
</style>