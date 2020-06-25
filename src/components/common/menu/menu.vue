<template>
  <div class='menu-container' @mouseleave="mouseLeave">
    <div class="menu">
        <div v-for="(item) in showlist" :key="item.text" class="menu-level1-item-container">
            <div class="menu-level1-item" @click="level1BeClicked(item.text)">
                <div class="menu-level1-item-logo-container">
                    <img src="~assets/img/icon/menu/drink.png" />
                </div>
                <div class="menu-level1-item-text-container">
                    <span>{{item.text}}</span>
                </div>
                <div class="menu-level1-item-arrows-container">
                    <img src="~assets/img/icon/menu/arrow.png" :class="{'arrow-rotate':currentText == item.text,'arrow-rotate-reserve':currentText != item.text}"/>
                </div>
            </div>
            <div :class="{'menu-level2-container':true,'appear':currentText == item.text,'disappear':currentText != item.text}">
                <div class="menu-level2-item" v-for="item2 in item.level2" :key="item2.text" @click="level2_router_jump(item2.text)">
                    <span>{{item2.text}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  import {$} from '../../../js/jquery/jq'

  export default {
    name:'MenuBar',
    props:{
      showlist:{
          type:Array,
          required:true
      }
    },
    data(){
        return{
            currentText:''
        }
    },
    methods:{
        level1BeClicked(text){
            if(this.currentText == text){
                this.currentText = ''
                setTimeout(()=>{
                    $('.appear').slideDown(300)
                    $('.disappear').slideUp(300)
                })
                return
            }

            this.currentText = text

            setTimeout(()=>{
                $('.appear').slideDown(300)
                $('.disappear').slideUp(300)
            })
        },
        mouseLeave(){
            this.currentText = ''
            setTimeout(()=>{
                $('.appear').slideDown(300)
                $('.disappear').slideUp(300)
            })
        },
        level2_router_jump(text){
            this.$emit("contenttoggle",text)
            this.$store.commit('startloading')
        }
    },
    mounted(){
        setTimeout(()=>{
            let height = screen.availHeight*0.07 + 'px'
            console.log(height)
            $('.menu-level1-item,.menu-level2-item').css({
                height:height,
                lineHeight:height
            });

            let widthlog = screen.availHeight*0.04 + 'px'
            $('.menu-level1-item-logo-container,.menu-level1-item-logo-container img').css({
                width:widthlog
            })

            let widtharrow = screen.availHeight*0.02 + 'px'
            $('.menu-level1-item-arrows-container,.menu-level1-item-arrows-container img').css({
                width:widtharrow
            })
        },100)
    }
  }
</script>
<style scoped>
  .menu-container{
      width:100%;
  }

  .menu{
      width:100%;
      cursor: pointer;
      box-shadow: 0px 0px 5px 2px rgb(150, 150, 150);
      animation: menuentrance 0.6s;
  }

  .menu-level1-item-container{
      width:100%;
  }

  .menu-level1-item{
      width:100%;
      display: flex;
      flex-direction:row;
      background-color: rgb(250,195,194);
      color:white;
      font-weight: 400;
      text-shadow: 1px 1px 5px black;
      height: 50px;
      line-height: 50px;
  }

  .menu-level1-item-logo-container{
      width:30px;
      padding: 10px;
      
  }

  .menu-level1-item-logo-container img{
      width:30px;
      display: block;
  }

  .menu-level1-item-text-container{
      flex:1;
      text-align: left;
  }

  .menu-level1-item-arrows-container{
      width:20px;
      padding:15px;
  }

  .menu-level1-item-arrows-container img{
      width:20px;
      display: block;
  }

  .menu-level2-container{
      width:100%;
      display: none;
  }

  .menu-level2-item{
      width:100%;
      background-color: rgb(201,229,222);
      text-align: center;
      border-bottom: 1px solid white;
      color:white;
      font-weight: 500;
      text-shadow: 1px 1px 5px black;
      height: 50px;
      line-height: 50px;
  }

  .menu-level2-item:hover{
      background-color: rgb(201,229,222,0.6);
  }
  
  .arrow-rotate{
      animation: imgrotate 0.3s;
      animation-fill-mode: forwards;
  }

  .arrow-rotate-reserve{
      animation: imgrotatereserve 0.3s;
      animation-fill-mode: forwards;
  }

  @keyframes imgrotate{
      0%{
          transform: rotateZ(0deg);
      }
      100%{
          transform: rotateZ(90deg);
      }
  }

  @keyframes imgrotatereserve{
      0%{
          transform: rotateZ(90deg);
      }
      100%{
          transform: rotateZ(0deg);
      }
  }

  @keyframes menuentrance{
      0%{
          transform: scaleX(0);
      }
      100%{
          transform: scaleY(1);
      }
  }
</style>