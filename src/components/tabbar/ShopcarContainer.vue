 <template>
    <div class="shopcar-container">
        <div class="goods-list">
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner goods-item">
						<!-- 图片 -->
                        <!-- 这的写法 -->
                        <img :src="item.thumb_path">
					<div class="info">
                        <h1>
                            {{item.title}}
                        </h1>
                        <div class="goods-info">
                            <span class="price">{{item.sell_price}}</span>
                             <!-- countObj[item.id]表示这条商品的数量 -->
                            <shopbox :initcount="countObj[item.id]" :id="item.id"></shopbox>
                            <a href="#" @click.prevent="del(item.id)">删除</a>
                        </div>
                    </div>
                    </div>
				</div>
			</div>

<!-- 结算区域 -->
<div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
              <p>总计(不含运费)</p>
              <p>已勾选商品<span class="danger">{{getSum}}</span>件,总价<span class="danger">{{getTotal}}</span>

              </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
    </div>
</div>
        </div>
    </div>
</template>

<script>
import shopbox from '../subcomponents/shopcar box.vue';
import {mapGetters} from "vuex";
import {mapMutations} from "vuex"
export default {
    data() {
        return {
            goodslist:[]//商品列表
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        // async getGoodsList() {
        //     const {data} = await this.$http.get(
        //         "api/goods/getshopcarlist/"+this.idstr
        //     );
        //     console.log(data)
        // }
        ...mapMutations(["delGoods"]),
        getGoodsList() {
            if(this.idstr.length <= 0) return;
            this.$http.get("api/goods/getshopcarlist/"+this.idstr).then(function(result) {
                
                if(result.body.status === 0){
                    console.log(result)
                    this.goodslist = result.body.message
                }
            })
            console.log(+this.idstr)
        },
        // 删除购物车的商品
        del(id) {
            console.log(id)
             this.goodslist.some((item,i) => {
                 if(item.id == id)
                //  从页面删除商品
                 this.goodslist.splice(i,1)
                this.delGoods(id)
                 return true
             })
        }
    },
    components:{
        shopbox
    },
    computed: {
        ...mapGetters(["idstr","countObj","getSum","getTotal"])
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
    background-color:#eee;
    overflow: hidden;

    .goods-item{
    display:flex;
    img{
        width: 60px;
        height: 60px;
    }

    h1{
        font-size:13px
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .goods-info{
            display:flex;
            justify-content: space-between ;
            align-items: center;
            .price{
                color:red;
                font-weight: bold;
                font-size:16px
            }
        }
    }
}
}
.danger{
    color:red;
    font-weight: bold;
    font-size:16px
}
.jiesuan{
    display:flex;
    justify-content: space-between;
    // 上下居中
    align-items: center;
}
*{touch-action: pan-y;}

</style>   