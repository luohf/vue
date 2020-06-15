


<template>
 <div class="app-container">

    <!-- 顶部Header区域   -->
    <mt-header fixed title="上部"></mt-header>


     
    <transition>
    <router-view></router-view>
    </transition>
    
    <!-- 底部Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact">
                    <!-- <span class="mui-badge">9</span> -->
                    </span> 
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
            <!-- /shopcar -->
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">{{totalcount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    

    
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(["totalcount"])
  }
}
</script>


<style lang="scss" scoped>
.mint-header{
  z-index:63;
}
  .app-container{

    padding-top: 40px;
    padding-bottom: 50px;

	overflow-x: hidden;
  }
// </style>

.v-enter,
// .v-leave-to
{
  opacity:0;
  transform: translateX(100%);
}

.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}

.v-enter-active,
.v-leave-active{
	transition:all 0.5s ease
}



// .mui-bar-tab .mui-tab-item-bl {
//     display: table-cell;
//     overflow: hidden;
//     width: 1%;
//     height: 50px;
//     text-align: center;
//     vertical-align: middle;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     color: #929292;
    
// }

// .mui-bar-tab .mui-tab-item-bl .mui-icon {
//     top: 3px;
//     width: 24px;
//     height: 24px;
//     padding-top: 0;
//     padding-bottom: 0;
// }



// .mui-bar-tab .mui-tab-item-bl .mui-icon~.mui-tab-label {
//     font-size: 11px;
//     display: block;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }

// .mui-bar-tab .mui-tab-item-bl .mui-active {
//     color: #007aff;
// }
 *{touch-action: pan-y;}
 .preview figure {
  // float: left;
  // width: 30%;
  // height:calc(30vw - 0px);
  // margin: 1.5%;
  

}

.preview figure img {
  // width: 50%;
  // width:10px;
}


</style>