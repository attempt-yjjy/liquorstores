<template>
  <div class='arrowlink' :style="{'width':HowWidth,'height':HowHeight}">
    <img src="~assets/img/other/arrow-left.png"/>
    <div class="arrowlink-text-container">
      <span>{{WhatText}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'LeftArrowLink',
    props:{
      HowWidth:{
          type:String,
          required:false,
          default:'100%'
      },
      HowHeight:{
          type:String,
          required:false,
          default:'100%'
      },
      WhatText:{
          type:String,
          required:false,
          default:'link到哪呢?'
      }
    }
  }
</script>
<style scoped>
  .arrowlink{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    cursor: pointer;
    animation: arrowappear 0.5s;
  }

  .arrowlink:hover{
    transform: scale(1.05);
    color:rgb(250,195,194);
    text-shadow: 1px 1px white;
    transition: all 0.3s;

  }

  .arrowlink img{
    width:90%;
    height:90%;
  }

  .arrowlink-text-container{
    height:10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;     
  }

  @keyframes arrowappear{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
</style>