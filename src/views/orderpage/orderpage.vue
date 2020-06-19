<template>
  <div class='orderpage-container'>
      <header>
          <top-bar></top-bar>     
      </header>
        <div class="body-container">
            <div class="menu-container">
              <menu-bar :showlist="menulist" @contenttoggle="changecontent"></menu-bar>
            </div>
            <div class="list-container">
                
                <div class="list-item" v-for="item in juiceListToShow" :key="item.JuiceId"> 
                    <juice-block :juice-src="item.JuiceSrc" 
                                    :juice-name="item.JuiceName" 
                                    :juice-price="item.JuicePrice"
                                    :today-sales="item.TodaySales"
                                    :discount="item.discount"
                                     />
                </div>
            </div>
        </div>
  </div>
</template>
<script>
  let request = require('../../js/request/request.js')

  import TopBar from 'components/common/topbar/topbar'
  import MenuBar from 'components/common/menu/menu'
  import JuiceBlock from 'components/common/juiceblock/juiceblock'

  export default {
    name:'OrderPage',
    data(){
        return {
            juiceListToShow:[],
            juiceListAll:[],
            menulist:[]
        }
    },
    props:{
      
    },
    methods:{
        changecontent(text){
            this.juiceListToShow = this.juiceListAll.filter(value=>{
                
                return value.BelongTo == text
                 
            })
        }
    },
    components:{
        TopBar,
        MenuBar,
        JuiceBlock
    },
    created(){
        request.get("/public/juice-list.json").then(result=>{
            
            this.juiceListToShow = result.data.map(value=>value)
            this.juiceListAll = result.data
        }).catch(error=>{
            console.log("发生错误")
        })

        request.get("/public/menu-list.json").then(result=>{
            this.menulist = result.data
        })
    }
  }
</script>
<style scoped>
  .orderpage-container{
      position: absolute;
      left: 0;
      top: 0;
      height:100vh;
      width:100vw;
      z-index: 0;
  }

  .body-container{
      position: fixed;
      top:6vh;
      left: 0;
      width:100%;
      height:94vh;
      display: flex;
      flex-direction: row;

  }

  .menu-container{
      width:15vw;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
  }

  .list-container{
      width:85vw;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      overflow-y:scroll;
  }

  .list-item{
      width:250px;
      height:350px;
      margin:20px;
      
  }
  
</style>