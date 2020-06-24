<template>
  <div class='universalicon'>
      <div class="icon-container">
          <img :src="$store.state.order.iconbaseUrl + WhatImg" :class="{'icon-rotate':IfRotate}"/>
      </div>
      <div class="text-container">
          <span>{{CusText}}</span>
      </div>
  </div>
</template>
<script>
  export default {
    name:'UniversalIcon',
    props:{
      WhatHappened:{
          type:Number,
          required:false,
          default:0
      },
      IfRotate:{
          type:Boolean,
          required:false,
          default:false
      },
      CusText:{
          type:String,
          required:false,
          default:" "
      }
    },
    computed:{
        WhatImg(){
            let result
            switch(this.WhatHappened){
                case 0:result = "loading.png";break;
                case 1:result = "success.png";break;
                case 2:result = "failure.png";break;
            }
            return result
        }
    }
  }
</script>
<style scoped>
  .universalicon{
      width:100%;
      height:100%;
  }

  .icon-container{
      width:100%;
      height:80%;
  }
   
  .icon-container img{
      width:100%;
      height:100%;
  }

  .text-container{
      width:100%;
      height:20%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color:white;
      text-shadow: 1px 1px 3px black;
  }

  .icon-rotate{
      animation: iconrotate 0.8s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
  }

  @keyframes iconrotate{
      0%{
          transform: rotateZ(0);
      }
      100%{
          transform: rotateZ(360deg);
      }
  }
</style>