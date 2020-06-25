<template>
  <div class='summaryblock'>
      <div class="summaryblock-mask" @click="maskClicked"></div>
      <div class="summaryblock-body" :style="{'width':BlockWidth,'height':BlockHeight}">
          <div class="summaryblock-juicelist-show">
            <empty-show v-show="$store.state.order.currentOrder.length == 0" img-width="20%" font-size="20px"></empty-show>
            <div :class="{'summaryblock-juicelist-item':true,'item-bechosed':currentId == item.JuiceId}" v-for="item in $store.state.order.currentOrder" :key="item.JuiceId" @click="currentId = item.JuiceId">
              <div class="img-container">
                <img :src="$store.state.order.imgbaseUrl + (item.JuiceId % 5 + 1) + '.jpg'"/>
              </div>
              <div class="message-container">
                <div class="message-name">
                  <span>{{item.JuiceName}}</span>
                </div>
                <div class="message-price-and-count">
                  <span class="message-price-num">￥{{(item.count * item.JuicePrice)|itemPrice}}</span>
                  <div class="message-price-and-operate">
                    <div class="decrease-button button bluebutton" @click.stop="changecount(item.JuiceId,-1)">-</div>
                    <div class="message-count-num">{{item.count}}</div>
                    <div class="increase-button button pinkbutton" @click.stop="changecount(item.JuiceId,1)">+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="summaryblock-summarymessage-show">
            <div class="sign-container">
              <img src="~assets/img/icon/sign/sign.jpg"/>
            </div>
            <div class="totalprice">
              <span>总价格:</span>
              <span>￥{{$store.getters.totalPrice}}</span>
            </div>
            <div class="summaryblock-button-container">
              <div class="removebutton button pinkbutton" @click="removejuice">Delete This Juice</div>
              <div class="submitbutton button mixbutton" @click="removealloforder">Remove All Choices</div>
              <div class="submitbutton button bluebutton" @click="submitorder">Commit This Order</div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
  import EmptyShow from 'components/common/emptyshow/emptyshow'
  import {$} from 'js/jquery/jq.js'

  export default {
    name:'SummaryBlock',
    props:{
      BlockWidth:{
        type:String,
        required:false,
        default:'50%'
      },
      BlockHeight:{
        type:String,
        required:false,
        default:'60%'
      }
    },
    data(){
      return {
        currentId:-1
      }
    },
    components:{
      EmptyShow
    },
    filters:{
      itemPrice(value){
        return value.toFixed(2)
      }
    },
    methods:{
      maskClicked(){
        this.$emit('block-off')
      },
      changecount(id,value){
        this.$store.commit('changeCount',{id,value})
      },
      removejuice(){
        this.$store.commit('removeJuice',this.currentId)
      },
      submitorder(){
        if(this.$store.state.order.currentOrder.length == 0){
          console.log("等于0")
          return
        }
        this.$store.commit('startloading')
        this.$store.dispatch('submitOrder',()=>{
          setTimeout(()=>{
                this.$store.commit('iconhidden')
                this.$store.commit('loadingsuccess')
                setTimeout(()=>{
                    this.$store.commit('iconhidden')
                },800)
            },500)
        })
      },
      removealloforder(){
        this.$store.commit('removeAll')
      }
    },
    mounted(){
      setTimeout(()=>{
      $('.summaryblock-summarymessage-show .totalprice').css({
        fontSize:screen.availHeight * 0.02 + 'px'
      })
      },100)
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
      color:rgba(130,130,130);
      
  }

  .summaryblock-mask{
    position: absolute;
    width:100%;
    height:100%;
    z-index: 151;
    top:0;
    left:0;
  }

  .summaryblock-body{
      background-color: white;
      border-radius: 2px;
      display:flex;
      flex-direction: row;
      box-shadow: 0 0 3px rgba(130,130,130);
      animation: summaryblockappear 0.8s;
      z-index: 152;
  }

  .summaryblock-juicelist-show{
      width:70%;
      height:100%;
      overflow-y:scroll;
      border-right: 1px solid rgb(200,200,200);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      background-color: rgba(240,240,240)

  }

  .summaryblock-juicelist-item{
      width:28%;
      height:45%;
      margin: 1vh;
      margin-top:2vh;
      background-color: white;
      box-shadow: 0 0 3px rgb(200,200,200);
  }

  .summaryblock-juicelist-item:hover{
      transition: all 0.2s;
      box-shadow: 0 0 10px 5px rgb(250,195,194);
  }

  .item-bechosed{
      transition: all 0.2s;
      box-shadow: 0 0 10px 5px rgb(250,195,194);
  }

  .summaryblock-juicelist-item .img-container{
      width:100%;
      height:70%;
      display: block;
  }

  .summaryblock-juicelist-item .img-container img{
    width:100%;
    height:100%;
  }

  .summaryblock-juicelist-item .message-container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height:30%;
  }

  .message-container .message-name{
    font-weight: 700;
    width:90%;
    
  }

  .message-container .message-price-and-count{
    width:90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height:1.5em;
  }

  .message-price-and-count .message-price-and-operate{
    display: flex;
    flex-direction: row;
    width:50%;
    
  }

  .message-price-and-operate .message-count-num{
    width:50%;
    text-align: center;
    border-bottom: rgba(130,130,130) 1px solid;
  }

  .message-price-and-count .button{
    width:25px;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
  }

  .button{
    cursor: pointer;
  }

  .button:hover{
    text-shadow: 1px 1px 3px black;
    transition: all 0.2s;
  }
  .summaryblock-summarymessage-show{
      width:30%;
      height:100%;
  }

  .summaryblock-summarymessage-show .sign-container{
    width:100%;
    height:50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .sign-container img{

    width:20vh;
    height:20vh;
    border-radius: 50%;
    border:4px solid rgb(250,195,194);
    /* box-shadow: 0 0 10px 5px rgb(250,195,194); */
  }

  .summaryblock-summarymessage-show .totalprice{
    width:100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    color:rgba(130,130,130);
  }

  .summaryblock-button-container{
    width:100%;
    height:40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .summaryblock-button-container .button{
    width:70%;
    height:5vh;
    text-align: center;
    line-height: 5vh;
    color:white;
    border-radius: 2px;
  }

  .pinkbutton{
    background-color: rgb(250,195,194);
  }

  .bluebutton{
    background-color: rgb(41, 229, 235);
  }

  .mixbutton{
    background-color: rgb(41, 229, 235);
  }

  @keyframes summaryblockappear{
    0%{
      transform: translateY(100px);
      opacity: 0;
    }
    100%{
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>