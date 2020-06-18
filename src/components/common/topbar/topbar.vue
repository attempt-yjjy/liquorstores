<template>
  <div class='topbar-container'>
      <div class="button-slot-container">
          <slot></slot>
      </div>
      <div class="profile-container">
          <div class="name">{{name}}</div>
      </div>
  </div>
</template>
<script>
  export default {
    name:'TopBar',
    props:{
      
    },
    data(){
        return {
            name:'Mr Yuan'
        }
    }
  }
</script>
<style scoped>
  .topbar-container{
      position: fixed;
      top: 0;
      left: 0;
      width:100%;
      height:6vh;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: 100;
      padding-left: 2em;
      padding-right:2em;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
  }
</style>