<template>
  <div id="app">
    
    <global-bg></global-bg>
    <router-view></router-view>
    <float-promp></float-promp>
    <summary-block></summary-block>
  </div>
</template>
<script>
import FloatPromp from 'components/common/floatpromp/floatpromp'
import GlobalBg from './components/global/globalbg'
import SummaryBlock from 'components/common/summaryblock/summaryblock'

export default {
  components:{
    GlobalBg,
    FloatPromp,
    SummaryBlock
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
