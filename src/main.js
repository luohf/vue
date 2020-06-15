//js入口



import Vue from 'vue'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 导入组件
import app from './App.vue'

// 导入vue-router
import VueRouter from 'vue-router'



Vue.config.devtools = true;


Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)
// 每当初始化项目的时候，就先从localStorage取数据
let car = window.JSON.parse(localStorage.getItem('cart') || '[]')
const store = new Vuex.Store({
  state:{
    //在cart，应该把每个商品，存储成一个对象{id,count}
    // cart:[]//购物车的数组
    cart:car
  },
  mutations:{
    addToCar(state,goods) {
      //将商品添加到购物车
      // 如果购物车，之前曾经有这个商品，则只更新数量即可，如果曾经没有，则直接push
    //state.cart.push(goods)
    let flag = false
    state.cart.some(item => {
      if(item.id === goods.id) {
        // 如果找到了相应的商品，则直接更新数量
        item.count+=goods.count
        item.price = goods.price
        flag = true
        //终止后续循环
        return true;
      }
    })
    //如果没找到，则直接push到购物车
    if(!flag) {
      state.cart.push(goods)
    }
// 为持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localStorage
    localStorage.setItem('cart',window.JSON.stringify(state.cart))
    },
    updateGoodsCount(state,goods){
      // 根据传递过来的商品信息，更新购物车中商品的数量,为购物车图标的变做准备
      state.cart.some(item => {
        if(item.id == goods.id) {
          item.count = goods.count
          return true
        }
      })
      // 为持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localStorage
    localStorage.setItem('cart',window.JSON.stringify(state.cart))
    },
    // 删除vuex的购物车的商品
    delGoods(state,id) {
      state.cart.some((item,i) => {
        if(item.id == id)
        this.state.cart.splice(i,1)
        return true
      })
       // 为持久化存储购物车的数据，可以把购物车的商品，序列化出来，存储到localStorage
    localStorage.setItem('cart',window.JSON.stringify(state.cart))
    }
  },
  getters:{
    totalcount(state) {
      // 图标的商品数量
      let c = 0
      //getters的特性，只要靠的数据变了，必然会重新计算这个getters的值
      state.cart.forEach(item => c+=item.count)
      return c
    },
    idstr(state) {
      // 获取购物车的所有的商品的id字符串
      let arr = []
      state.cart.forEach(item => 
        arr.push(item.id))
        return arr.join(',')
      
    },
    countObj(state){
      // 将购物车的商品的id和商品的数量弄成键值对
      let o ={}
      state.cart.forEach(item => o[item.id] = item.count)
      return o
    },
    // 取总件数
    getSum(state) {
      let c = 0
      state.cart.forEach(item => {
        c=c+item.count
       
      })
      return c
    },
    // 取总价
    getTotal(state) {
      let c = 0
      state.cart.forEach(item => {
        c=c+item.price * item.count
       
      })
      return c
    }

  }
})

import moment from 'moment'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.filter('dateFormat',function(dataStr,pattern = "YYYY--MM--DD HH:mm:ss" ) {
  return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'

Vue.use(VueResource)


Vue.http.options.root = 'http://api.cms.liulongbin.top';


Vue.http.options.emulateJSON = true;

//导入mui的样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

//按需导入Mint-ui的组件
//导入上部和轮播图组件
// import {Header, Swipe, SwipeItem,Button} from 'mint-ui'

// 注册组件
// Vue.component(Header.name,Header)

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

// Vue.component(Button.name,Button)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入路由对象
import router from './router.js'

// 从mint-ui导入懒加载组件
// import {Lazyload} from 'mint-ui'
// Vue.use(Lazyload)
var vm = new Vue({
  el:'#app',
  render: c => c(app),
  // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router,//将路由对象挂载到 vm 上
  store//挂载store
})