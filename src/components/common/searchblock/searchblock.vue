<template>
  <div class='searchblock' :style="{'width':BlockWidth,'height':BlockHeight}">
      <input type="text" v-model="inputValue" placeholder="please input" @keypress.enter="searchbeclicked"/>
      <div @click="searchbeclicked" class="search-button">Start Search</div>
      <div @click="resetbeclicked" class="reset-button">Reset Options</div>
  </div>
</template>
<script>
  export default {
    name:'SearchBlock',
    props:{
      BlockWidth:{
          type:String,
          required:false,
          default:'100%'
      },
      BlockHeight:{
          type:String,
          required:false,
          default:'100%'
      }
    },
    data(){
        return {
            inputValue:''
        }
    },
    methods:{
        searchbeclicked(){
            this.$emit('startsearch',this.inputValue)
            this.inputValue = ''
        },
        resetbeclicked(){
            this.inputValue = '',
            this.$emit('startsearch',this.inputValue)
        }
    }
  }
</script>
<style scoped>
  .searchblock{
      background-color: rgba(255, 255, 255, 0.9);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      box-shadow: 0 0 3px 1px rgba(54, 222, 228,0.5);
  }

  .searchblock input{
      outline: none;
      width:61.8%;
      height:15%;
      padding-left: 5px;
      font-size: 15px;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgb(54, 222, 228);
      border-top: 1px solid rgb(54, 222, 228);
      text-align: center;
      color:rgba(100,100,100,0.8);
  }

  .searchblock input:focus{
      box-shadow: 0 0 5px 1px rgb(54, 222, 228);
  }

  .searchblock .search-button,.searchblock .reset-button{
      width:61.8%;
      height: 15%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: rgba(25,209,233,0.6);
      color:white;
      cursor: pointer;
      border-radius: 2px;
      text-shadow: 1px 1px 5px black;
  }

  .searchblock .reset-button{
      background-color: rgba(250,195,194,0.6);
  }
</style>