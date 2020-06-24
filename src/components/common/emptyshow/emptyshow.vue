<template>
  <div class='emptyshow'>
      <img src="~assets/img/other/empty.png" :style="{'width':ImgWidth}"/>
      <span :style="{'font-size':FontSize}">暂无</span>
  </div>
</template>
<script>
  export default {
    name:'',
    props:{
      ImgWidth:String,
      FontSize:String
    }
  }
</script>
<style scoped>
  .emptyshow{
      width:100%;
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .emptyshow img{
      opacity: 0.5;
  }

  .emptyshow span{
      color:rgba(100, 100, 100, 0.5)
  }
</style>