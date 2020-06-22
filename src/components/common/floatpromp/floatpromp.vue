<template>
  <div class='floatpromp-container'>
      <img src="~assets/img/other/floatside.png"/>
    <div class="count-container">
        <span>{{currentJuiceCount}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'FloatPromp',
    props:{
      currentJuiceCount:{
          type:Number,
          required:false,
          default:10
      }
    },
    data(){
        return {
            
        }
    }

  }
</script>
<style scoped>
  .floatpromp-container{
      position: fixed;
      top:50vh;
      left:3vw;
      z-index:101;
      width:14vh;
      height:14vh;
      cursor: pointer;
      border:1px solid rgb(250,195,194);
      border-top:none;
      border-radius: 50%;
      box-shadow: 0px 0px 10px rgb(250,195,194);
  }

  .floatpromp-container:hover{
      transform: scale(1.1);
      transition: all 0.3s;
  }

  .floatpromp-container img{
      width:100%;
      height:100%;
  }

  .floatpromp-container .count-container{
      width:3vh;
      height:3vh;
      background-color: rgb(222,77,101);
      text-align: center;
      line-height: 3vh;
      border-radius: 50%;
      color:white;
      position: absolute;
      top:0;
      right: 0;
  }
</style>