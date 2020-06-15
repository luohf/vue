<template>
    <div class="total">
       <!-- 顶部滑动条区域 -->
       <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<!-- 三元表达式，选中id=0的文字 -->
						<a :class="[ 'mui-control-item',item.id == 0 ?  'mui-active' : '']" 
						v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
					
					</div>
				</div>

			</div>

			<!-- 图片列表区域 -->
		<!-- mint-ui的要求 -->
			<!-- <ul>
				<li v-for="item in list" :key="item.id"> -->
					<!-- mint-ui规定要个地址 -->
					<!-- <img v-lazy="item.img_url">
				</li>
			</ul>	-->
			<!-- <div class="outPhoto">
			<img class="photoList" v-for="item in list" v-lazy="item.img_url" :key="item.id"/>
			</div> -->

<!-- 图片列表区域 -->
	<ul class="photoList">
  <router-link v-for="item in list" :key="item.id"
	:to="'/home/photoinfo/'+item.id" tag="li">
    <img v-lazy="item.img_url">
		<div class="info">
			<h1 class="info-title">{{item.title}}</h1>
			<div class="info-body">{{item.zhaiyao}}</div>
		</div>
  </router-link>
</ul>
    </div>     
</template>


<script>
import mui from '../../lib/mui/js/mui.min.js'

export default{
    data(){
      return {
		  cates:[],//所有分类的列表数组
		  list: [] //图片列表的数组
	  }
	},
	created() {
		// 取图片列表
		this.getAllCategory();
		//刚开始加载的，进入页面就主动请求所有图片列表图片的数据
		this.getPhotoListByCateId(0);
	},
    mounted() {//当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
		//如果要操作元素了，最好在mounted里面，因为，这里时候的DOM元素是最新的
		//2.初始化滑动控件
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods: {
		//取图片分类列表
        getAllCategory(){
			this.$http.get("api/getimgcategory").then(result => {
				if(result.body.status === 0) {
					result.body.message.unshift ({ title: "全部", id: 0});
					this.cates = result.body.message;
				}
			})
		},
			getPhotoListByCateId(cateId){
       this.$http.get('api/getimages/' + cateId).then(result => {
				 console.log(result)
		   if(result.body.status === 0) {
			   this.list = result.body.message;
			 }
			 console.log(result)
	   });
	}
	},

};

</script>

<style lang="scss" scoped>

*{
	touch-action: pan-y;
}
// mint-ui的要求

// .outPhoto{
	// width: 1000px;
// 	margin: 0 38px;
// }
// li{
// 	margin: 0 38px;
// }

.photoList{
	// background-color: #ccc;
	padding:0 10px;

// 	li{
// 	margin: 0 38px;
// }
li{
text-align: center;
margin-bottom:10px ;
position: relative;

img{
	width: 100%;
}
color:white;
.info{
	position: absolute;
	bottom:6px;
	text-align: left;
	background-color:rgba(0,0,0,0.3);
	
.info-title {
	font-size: 14px;
	
	.info-body {
		font-size:13px
	}
}
}

// 懒加载的图片
img[lazy="loading"]{
	width: 40px;
	height: 300px;
	margin:auto;

}
}

}
</style>