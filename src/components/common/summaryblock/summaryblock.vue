<template>
  <div class='summaryblock'>
      <div class="summaryblock-body">
          <div class="summaryblock-juicelist-show"></div>
          <div class="summaryblock-summarymessage-show"></div>
      </div>
  </div>
</template>
<script>
  export default {
    name:'SummaryBlock',
    props:{
      
    }
  }
</script>
<style scoped>
  .summaryblock{
      position: absolute;
      top:0;
      left:0;
      width:100vw;
      height:100vh;
      background-color: rgba(50,50,50,0.4);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      z-index: 150;
  }

  .summaryblock-body{
      width:50%;
      height:50%;
      background-color: white;
      border-radius: 2px;
      display:flex;
      flex-direction: row;
  }

  .summaryblock-juicelist-show{
      width:70%;
      height:100%;
      overflow-y:scroll;
      border-right: 1px solid black;
  }

  .summaryblock-summarymessage-show{
      width:30%;
      height:100%;
  }
</style>