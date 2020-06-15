 <template>
  <div>
    <!-- 新闻列表页面 -->
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
    <router-link :to=" '/home/newsinfo/ '+ item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" />
        <div class="mui-media-body">
        <h1>{{item.title}}</h1>
        <p class="mui-ellipsis">
        <span>发表时间： {{ item.add_time | dateFormat }}</span>
        <span>点击：{{item.click}}</span>
        </p>
        </div>
    </router-link>
    </li>
</ul>
  </div>
</template>

 <script>
import { Toast } from "mint-ui";

export default {
  //这的data是方法
  data() {
    //    将数据返回到上面
    return {
      newslist: []
    };
  },

  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        console.log(result)
        if (result.body.status === 0) {
          
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败 !");
        }
      });
    }
  }
};
</script>

 <style lang= "scss" scoped>
/* 新闻列表页面样式 */
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: teal;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>