<template>
  <div id="app">
    
    <global-bg></global-bg>
    <router-view></router-view>
 
  </div>
</template>
<script>

import GlobalBg from './components/global/globalbg'
import request from 'js/request/request.js'
export default {
  components:{
    GlobalBg
  },
  methods:{
    
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

</style>
