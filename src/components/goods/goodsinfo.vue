<template>
<div class="goods_container">
	
    
<div class="mui-card">
	
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<swiper :lunbotuList = "lunbotuList" :is_total="false"></swiper>
			</div>
		</div>
				
	</div>
<div class="mui-card">
	<div class="mui-card-header">商品</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<p class="price">
				市场价:<del>{{goodsinfo.market_price}}元</del>&nbsp;&nbsp;销售价:<span
			    class="now_price">{{goodsinfo.sell_price}}元</span>
				</p>
				<p>购买数量:<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
				<p>
				<mt-button type="primary" size="small">立即购买</mt-button>
				<mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>			
				</p>
				</div>
			</div>
				
			</div>

<div class="mui-card">
	<div class="mui-card-header">商品参数</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
<p>商品货号:{{goodsinfo.goods_no}}</p>
<p>库存情况:{{goodsinfo.stock_quantity}}件</p>
<p>上架时间:{{goodsinfo.add_time | dateFormat}}</p>

			</div>
		</div>
	<div class="mui-card-footer">
		<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
		<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
	</div>
</div>			
</div>


</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/number box.vue'
export default {
	data(){
		return {
		id:this.$route.params.id,
		lunbotuList:[],
		goodsinfo:{},
		SelectedCount:1,//起初的商品数量
		
		
		}
	},


    created(){
		this.getLunbotu();
		// console.log(this);
		this.getgoodsinfo()
	},
	methods: {
		getLunbotu(){
			this.$http.get("api/getthumimages/" + this.id).then(function(result){
				if(result.body.status === 0){
// 因为轮播图组件中有一个src属性,为item添加img属性，因为轮播图组件，
// 只认识item.img,不认识item.src
					result.body.message.forEach((item)=>{
						item.img = item.src;
					})
					this.lunbotuList = result.body.message;
					
				}
			});
		},
	    getgoodsinfo(){
			this.$http.get("api/goods/getinfo/"+this.id).then(function(result){
				if(result.body.status === 0){
					this.goodsinfo = result.body.message[0];
				}

				
			})
		},
		// 到商品图文
		goDesc(id){
			// 编程式导航，$router
			this.$router.push({name:'godesc',params:{id}});
			
		},
		// 到评论页面
		goComment(id){
			this.$router.push({name:'gocomment',params:{id}});
		},
		getSelectedCount(count) {
			// 当子组件把选的数量传递给父组件的时候，把选的值保存到data上
			this.SelectedCount = count;
			console.log(count);
		},
		// 点击加入购物车
		addToCart() {
			// this.flag = !this.flag;
			// 调用mutations的addToCar
			this.$store.commit("addToCar",{
				id:this.id,
				count:this.SelectedCount,
				price:this.goodsinfo.sell_price
			})
		}
	},
	components:{
		swiper,
		numbox
	}

}
</script>

<style lang="scss" scoped>
    .goods_container{
        background:#eee;
        overflow: hidden;
		.now_price{
			color:red;
			font-size:16px;
			font-weight:bold
		}
    }


.mui-card-footer{
	display:block;
	button{
		margin: 15px 0;
	}
}
	
</style>