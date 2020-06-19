<template>
  <div class='topbar-container'>
      <div class="button-slot-container">
          <slot></slot>
      </div>
      <div class="custom-container">
          <div class="content" @click="buttonBeClicked">{{content}}</div>
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
            content:'Search In All Menu'
        }
    },
    methods:{
      buttonBeClicked(){
        this.$emit("buttonbecliked")
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
      justify-content: flex-end;
      align-items: center;
  }

  .custom-container .content{
    height:5vh;
    width:10vw;
    background-color: rgb(25, 209, 233);
    text-align: center;
    line-height: 5vh;
    color:azure;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: none;
    opacity: 0.6;
  }

  .custom-container .content:hover{
    opacity: 1;
    transition: all 0.3s;
  }
</style>