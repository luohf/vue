<template>
    <div>
        <div class="goodsdesc-container">
      <h3> {{info.title}}</h3>
      <hr>
      <div class="content" v-html=info.content>

      </div>
        </div>
    </div>    
</template>

<script>
export default{
    data(){

        return {
        info:{}
        }
    },




    created() {
        this.getinfo()
    },
    methods: {
       getinfo(){
          this.$http.get("api/goods/getdesc/"+this.$route.params.id)
          .then(function(result){
              if(result.body.status === 0){
                  this.info = result.body.message[0];
              }
          }) 
       } 
    },
}
</script>

<style lang="scss" >

.goodsdesc-container{
h3 {
    font-size:16px;
    color:skyblue;
    text-align: center;
    margin: 15px 0;
   
    
}
// 先去掉scoped，再让width100%
.content{
     padding: 4px;
    img{
        width:100%
    }
}
}
</style>