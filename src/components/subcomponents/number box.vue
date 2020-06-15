<template>
<div class="mui-numbox" data-numbox-min='1' >
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input id="test" class="mui-input-numbox" type="number" value="1" ref="sum"
   @change="changeCount"/>
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
</div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js"
export default{
   mounted() {
    //    初始化，让该组件可以加减数量
      mui(".mui-numbox").numbox() 
   }, 
   methods: {
     changeCount(){
      //   每当文本框的数据被修改的时候，立即把最新的数据，通过
      //   事件调用，传递给父组件
      // 表购物车的数量,有parseInt的转化
         this.$emit('getCount',parseInt(this.$refs.sum.value));
         
      }
   },
   props:["max"],
   // 属性监听，用来设置购物的最大数量
   watch:{
      'max':function(newVal,oldVal){
         // 调用mui框架的一个js方法
         mui(".mui-numbox").numbox().setOption('max',newVal)
      }
   }

}
</script>

<style lang="scss" scoped>
    
</style>