<template>
    <div class='special-container'>
        <div class='special-header'>今日特惠</div>
        <div class='special-container'>
            <div class='special-aside' width="200px"></div>
            <div class='special-main'></div>
        </div>
    </div>
  
</template>

<script>
export default {
    name:"Special",
    created(){
        console.log("已经加载")
    }
}
</script>

<style>
  .special-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .special-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .special-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>