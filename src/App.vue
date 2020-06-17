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

</style>
