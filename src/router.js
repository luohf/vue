import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photolist/photolist.vue'
import goodslist from './components/goods/goods.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import godesc from './components/goods/godesc.vue'
import gocomment from './components/goods/gocomment.vue'
import Photoinfo from './components/photolist/photoinfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect: '/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/goodslist',component:goodslist},
    {path:'/home/goodsinfo/:id',component:goodsinfo},
    {path:'/home/godesc/:id',component:godesc,name:'godesc'},
    {path:'/home/gocomment/:id',component:gocomment,name:'gocomment'},
    {path:'/home/photoinfo/:id',component:Photoinfo }
  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router