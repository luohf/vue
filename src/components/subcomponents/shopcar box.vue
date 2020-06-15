<template>
<div class="mui-numbox" data-numbox-min='1' style="height:25px">
	<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
	<input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="sum"
   @change="changeCount"/>
	<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
</div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js"
import {mapMutations} from 'vuex'
export default{
   mounted() {
    //    初始化，让该组件可以加减数量
      mui(".mui-numbox").numbox() 
   }, 
   methods: {
     changeCount(){
      // 获取选择的商品数量
      const val = parseInt(this.$refs.sum.value);
      console.log(val)
      //调用mutations方法，更新数量
         this.updateGoodsCount({id:this.id,count:val})
         console.log(this.id)
      },
      ...mapMutations(["updateGoodsCount"])

   },
props:["initcount","id"]
  

}
</script>

<style lang="scss" scoped>
 *{touch-action: pan-y;}
    
</style>