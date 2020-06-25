<template>
  <div id="app">
    
    <global-bg></global-bg>
    <router-view></router-view>
    <div class="universalicon-container" v-show="$store.state.global.StatusVisible">
        <universal-icon :what-happened="$store.state.global.WhatHappened" :if-rotate="$store.state.global.IfRotate" :cus-text="$store.state.global.StatusCusText"></universal-icon>
    </div>
  </div>
</template>
<script>

import GlobalBg from './components/global/globalbg'
import request from 'js/request/request.js'
import UniversalIcon from 'components/common/universalicon/universalicon'
import {$} from 'js/jquery/jq.js'

export default {
  components:{
    GlobalBg,
    UniversalIcon
  },
  methods:{
    
  },
  data(){
    return{
      
    }
  },
  mounted(){
    $('*').css({
      fontSize:screen.availHeight * 0.015 + 'px'
    })
  }
}
</script>
<style>
  ::-webkit-scrollbar{
    width:10px;
    height:10px; 
  }

  ::-webkit-scrollbar-thumb{
    width:5px;
  }

  *{
    margin: 0;
    padding: 0;
  }

  #app{
    width: 100vw;
    height:100vh;
    overflow-x: hidden;
  }

  .universalicon-container{
      position: absolute;
      width:4vw;
      height:10vh;
      top:40vh;
      left:48vw;
      z-index: 160;
  }

</style>
