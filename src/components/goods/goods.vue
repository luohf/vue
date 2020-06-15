<template>
  <!-- <div class="goods-list">
      <router-link class="goods-item" v-for="item in goodslist " :key="item.id"
          :to="'/home/goodsinfo/' + item.id">
          <img :src="item.img_url" alt="">

          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">{{item.sell_price}}元</span>
                  <span class="old">{{item.market_price}}元</span>
              </p>
              <p class="sell">
                  <span>热卖</span>
              <span>剩{{item.stock_quantity}}件</span>
              </p>
              
          </div>  
          
            
      </router-link>   

      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>   
  </div>     -->

<!-- 在网页中，有两种跳转方式
方式1：使用a标签的形式叫做标签跳转 -->
<!-- 方式2：使用window.location.href的形式，叫做编程式导航 -->
<div class="goods-list">
      <div class="goods-item" v-for="item in goodslist " :key="item.id"
      @click="goDetail(item.id)">
          
          <img :src="item.img_url" alt="">

          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="now">{{item.sell_price}}元</span>
                  <span class="old">{{item.market_price}}元</span>
              </p>
              <p class="sell">
                  <span>热卖</span>
              <span>剩{{item.stock_quantity}}件</span>
              </p>
              
          </div>  
          
            
      </div>   

      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>   
  </div>  
</template>

<script>

export default {
    data(){
        // data用来往组件内部，挂载一些私有数据的
        return {
            pageindex: 1,//分页的页数
            goodslist: [] //存放商品列表的数组
        };
    },
    
    created(){
      this.getGoodsList();        
    },
    methods: {
      getGoodsList() {
            // 获取商品列表
            this.$http.get("api/getgoods?pageindex=" 
            + this.pageindex).then(result => {
                if(result.body.status === 0){
                    // this.goodslist = result.body.message;
// 加载更多，老数据拼接新数据
        this.goodslist = this.goodslist.concat(result.body.message);
                }
            });
        },
        getMore(){
            this.pageindex++;
            this. getGoodsList();
        },
        goDetail(id) {
            // 使用JS的形式进行路由导航
            // 注意：一定要区分this.$route和this.$router这两个对象
            // 其中：this.$route是路由参数对象，所有路由中的参数，params,query
            // 都属于它
            // 其中：this.$router是一个路由导航对象，用它可以方便的使用JS代码，实现
            // 路由的前进，后退，跳转到新的URL地址
            this.$router.push("/home/goodsinfo/" + id);
            console.log(this);
            
        }
    }
}

</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap:wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        margin: 4px 0;
        padding:2px;
        display:flex;
        // 改变主轴方向，防止商品描述三行影响让左右边的商品出现空白
        flex-direction: column;
        justify-content: space-between;
        // 在网速差的状况下撑开高度
        min-height: 293px;
        img{
            width:100%;
        }
        .title{
            font-size:14px;
        }
        .info{
            background-color:#eee;
            p{
                margin:0;
                padding: 5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size:12px;
                    margin-left:10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>