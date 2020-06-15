<template>
  <div>
    <!-- 轮播图区域 -->
    <!-- <swiper :lunbotuList="lunbotuList" :is_total="true"></swiper> -->
    <!-- <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
  </van-swipe> -->
  <van-swipe :autoplay="3000">
  <van-swipe-item><img src="../../images/t3.jpg" alt /></van-swipe-item>
  <van-swipe-item><img src="../../images/t6.jpg" alt /></van-swipe-item>
  <van-swipe-item><img src="../../images/背景.jpg" alt /></van-swipe-item>
  
  </van-swipe>
    
    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <!-- <img src="../../images/menu1.png" alt /> -->
          
           <!-- <span class="mui-icon mui-icon-bars" ></span> -->
          <span class="mui-icon mui-icon-bars" ></span>

          <div class="mui-media-body">新闻</div> 
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <!-- <img src="../../images/menu2.png" alt /> -->
          <!-- <img src="../../images/背景.jpg" alt /> -->
          <!-- <span class="mui-icon mui-icon-image" ></span> -->

          <!-- <div class="mui-media-body">图片</div> -->
           <span class="mui-icon mui-icon-image" ></span>

          <div class="mui-media-body">图片</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- <router-link to="/home/goodslist"> -->
          <!-- <img src="../../images/menu3.png" alt /> -->
          <!-- <img src="../../images/t6.jpg" alt /> -->
          <!-- <span class="mui-icon mui-icon-star" ></span>
         
          
          <div class="mui-media-body">商品</div> -->
        <!-- </router-link> -->
         <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-star" ></span>
         
          
          <div class="mui-media-body">商品</div>
           </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- <a href="#"> -->
          <!-- <img src="../../images/menu4.png" alt /> -->
          <!-- <span class="mui-icon  mui-icon-paperplane" ></span>
          
          <div class="mui-media-body">反馈</div> -->
        <router-link to="/home/newslist">
           
          <span class="mui-icon mui-icon-bars" ></span>

          <div class="mui-media-body">新闻</div>
        </router-link>
        
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- <a href="#"> -->
          <!-- <img src="../../images/menu5.png" alt /> -->
          <!-- <div class="mui-media-body">视频</div> -->
        <router-link to="/home/photolist">
           <span class="mui-icon mui-icon-image" ></span>

          <div class="mui-media-body">图片</div>
        </router-link>
        <!-- </a> -->
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <!-- <img src="../../images/menu6.png" alt /> -->
          <!-- <div class="mui-media-body">其他</div> -->
           <router-link to="/home/goodslist">
         <span class="mui-icon mui-icon-star" ></span>
         
          
          <div class="mui-media-body">商品</div>
           </router-link>
        </a>
      </li>
    </ul>
    <!-- <h3>Home</h3> -->
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "../subcomponents/swiper.vue";
import {Swipe,SwipeItem} from 'vant';
export default {
  data() {
    return {
      //用来保存取到的数据
      lunbotuList: [

      ],
      is_total: true,
    //  images: [
    //     'https://img.yzcdn.cn/vant/apple-1.jpg',
    //     'https://img.yzcdn.cn/vant/apple-2.jpg',
    //   ],

    };
  },
  created() {
    //调用轮播图方法
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          console.log(result.body);
          if (result.body.status === 0) {
            //将取到的数据保存到data
            this.lunbotuList = result.body.message;
          } else {
            //提示加载轮播图失败
            Toast("加载轮播图失败。。。");
          }
        });
    }
  },
  // 注册组件
  components: {
    swiper,
    Swipe,
    SwipeItem

  }
};
</script>

<style lang="scss" scoped>
//六宫格的类
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  //六宫格的图片
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
.van-swipe {

height: 230px;
margin-bottom: 20px;
.van-swipe-item {
  text-align: center;
img {
  width:100%;
  height:100%
}
}

}

</style>