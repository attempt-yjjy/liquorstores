<template>
  <div class='orderpage-container'>
      <header>
          <top-bar @buttonbecliked="togglesearch"></top-bar>     
      </header>
        <div class="body-container">
            <div class="menu-container">
              <menu-bar :showlist="menulist" @contenttoggle="changecontent"></menu-bar>
            </div>
            <div class="list-container">               
                <div class="list-item"  v-for="item in juiceListToShow" :key="item.JuiceId" @click="dialogFormVisible = true"> 
                    <juice-block    :juice-id="item.JuiceId"
                                    :juice-name="item.JuiceName" 
                                    :juice-price="item.JuicePrice"
                                    :today-sales="item.TodaySales"
                                    :discount="item.discount"
                                     />
                </div>
            </div>
        </div>
        <aside>
            <div class="searchblock-container">
                <search-block @startsearch="startsearchfunc"></search-block>
            </div>
            <div class="dialog-container">
                <dialog-block  :juice-id="currentJuice.JuiceId"
                        :juice-name="currentJuice.JuiceName" 
                        :juice-price="currentJuice.JuicePrice"
                        :discount="currentJuice.discount" 
                        @besure="besure"></dialog-block>
            </div>
        </aside>
  </div>
</template>
<script>
  let request = require('../../js/request/request.js')

  import {$} from '@/js/jquery/jq.js'

  import TopBar from 'components/common/topbar/topbar'
  import MenuBar from 'components/common/menu/menu'
  import JuiceBlock from 'components/common/juiceblock/juiceblock'
  import SearchBlock from 'components/common/searchblock/searchblock'
  import DialogBlock from 'components/common/dialog/dialog'

  export default {
    name:'OrderPage',
    data(){
        return {
            juiceListToShow:[],
            juiceListAll:[],
            menulist:[],
            dialogFormVisible:false,
            currentJuice:{
                JuiceId:0,
                JuiceName:'',
                JuicePrice:0,
                discount:1
            }
        }
    },
    props:{
      
    },
    methods:{
        changecontent(text){
            this.juiceListToShow = this.juiceListAll.filter(value=>{
                
                return value.BelongTo == text
                 
            })
        },
        togglesearch(){
            $('.searchblock-container').slideToggle(300)
        },
        startsearchfunc(text){
            this.juiceListToShow = this.juiceListAll.filter(value=>{
                let reg = new RegExp(text)
                return reg.test(value.JuiceName)
            })
        },
        besure(count){
            //在这把id和数量发给浮窗组件
        }
    },
    components:{
        TopBar,
        MenuBar,
        JuiceBlock,
        SearchBlock,
        DialogBlock
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

  .searchblock-container{
      position: absolute;
      top:6vh;
      right:0vw;
      height:30vh;
      width:15vw;
      display: none;
  }
  
</style>