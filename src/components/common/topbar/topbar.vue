<template>
  <div class='topbar-container'>
      <div class="button-slot-container">
          <slot></slot>
      </div>
      <div class="custom-container">
          <div :class="{'content':true,'bgcolor-origin':!alreadyopen,'bgcolor-open':alreadyopen}" @click="buttonBeClicked">
            <span v-if="!alreadyopen">{{content1}}</span>
            <span v-else>{{content2}}</span>
          </div>
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
            content1:'Search In All Menu',
            content2:'Close Search',
            alreadyopen:false
        }
    },
    methods:{
      buttonBeClicked(){
        this.$emit("buttonbecliked")
        this.alreadyopen = !(this.alreadyopen)
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

  .bgcolor-origin{
    background-color: rgb(25, 209, 233);
  }

  .bgcolor-open{
    background-color: rgb(250,195,194);
    text-shadow: 1px 1px 5px black;
  }
</style>