<template>
  <div id="app">
    <global-bg></global-bg>
    <router-view></router-view>
  </div>
</template>
<script>
import GlobalBg from './components/global/globalbg'

export default {
  components:{
    GlobalBg
  }
}
</script>
<style>
  ::-webkit-scrollbar{
    width:5px;
    height:5px; 
  }

  ::-webkit-scrollbar-thumb{
    width:5px;
  }

</style>
