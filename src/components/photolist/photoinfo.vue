<template>
  <div>
    <h1 class="info_title">{{photoinfo.title}}</h1>
    <p class="subTitle">
      <span class="subDate">发表时间:{{photoinfo.add_time | dateFormat}}</span>
      <span class="clickCount">点击:{{photoinfo.click}}次</span>
      
    </p>
    <hr>
    <!-- 缩略图 -->
    
      <vue-preview :slides="photoSuoLue" @close="handleClose" ></vue-preview>
   

    <!-- 文字 -->
    <div class="content" v-html="photoinfo.content">

    </div>  
    
    <!-- 评论区域 -->
    <cmt :id="id"></cmt>
  </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id:this.$route.params.id,
      photoinfo:{},
      photoSuoLue:[]
    }
  },
  created() {
    // console.log(this)
    this.getPhotoInfo();
    this.getSuoLue() 
  },
  components:{
    cmt:comment
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/"+this.id).then(
        (result) =>{
          console.log(result)
           if(result.body.status == 0) {

          this.photoinfo = result.body.message[0]
          // console.log(this.list)
        }
        }
        
      // function(result){
      //   if(result.body.status == 0) {
      //     list = result.body.message[0]
      //   }
      // }
     )
    },
    getSuoLue() {
      this.$http.get("api/getthumimages/"+
      this.id).then((result)=>{
        console.log(result)
        result.body.message.forEach(item => {
          item.w=600;
          item.h=600;
          item.msrc=item.src
        });
        this.photoSuoLue = result.body.message
      })
    },
    handleClose(){

    }
  },
}
</script>
<style lang="css" scoped>
.info_title {
  font-size:18px;
  text-align: center;
  color:deepskyblue;
  margin: 15px 0;
}
.subTitle{
  display:flex;
  justify-content: space-between;
  font-size:13px
}
.content{
  font-size:13px;
  line-height: 30px;
}


</style>