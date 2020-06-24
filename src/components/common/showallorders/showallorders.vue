<template>
  <div class='showallorders-container'>
      <div class="showallorders-mask" @click="closeshowall"></div>
      <div class="showallorders">
          <div class="left-half-block">
              <div class="header-block">
                  <span>Processing</span>
              </div>
              <div class="operate-line"></div>
              <div class="table-head item">
                <div class="item-orderid item-room">订单号</div>
                <div class="item-totalPrice item-room">付款金额</div>
                <div class="item-time item-room">下单时间</div>
                <div class="item-operate item-room">
                    <div class="item-button head-room">操作</div>
                </div>
              </div>
              <div class="items-container">
                  <empty-show v-show="processinglist.length == 0" img-width="20%" font-size="20px"></empty-show>
                  <div class="item" v-for="item in processinglist" :key="item.OrderId">
                      <div class="item-orderid item-room">{{item.OrderId}}</div>
                      <div class="item-totalPrice item-room">￥{{item.OrderPrice}}</div>
                      <div class="item-time item-room">{{item.time}}</div>
                      <div class="item-operate item-room">
                          <div class="item-button">查看详情</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="right-half-block">
              <div class="header-block">
                  <span>Finished</span>
              </div>
              <div class="operate-line"></div>
              <div class="table-head item">
                <div class="item-orderid item-room">订单号</div>
                <div class="item-totalPrice item-room">付款金额</div>
                <div class="item-time item-room">下单时间</div>
                <div class="item-operate item-room">
                    <div class="item-button head-room">操作</div>
                </div>
              </div>
              <div class="items-container">
                  <empty-show v-show="finishedlist.length == 0" img-width="20%" font-size="20px"></empty-show>
                  <div class="item" v-for="item in finishedlist" :key="item.OrderId">
                      <div class="item-orderid item-room">{{item.OrderId}}</div>
                      <div class="item-totalPrice item-room">￥{{item.OrderPrice}}</div>
                      <div class="item-time item-room">{{item.time}}</div>
                      <div class="item-operate item-room">
                          <div class="item-button">查看详情</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  import request from 'js/request/request.js'
  import {$} from 'js/jquery/jq.js'
  import EmptyShow from 'components/common/emptyshow/emptyshow'

  export default {
    name:'ShowAllOrders',
    props:{
      
    },
    data(){
        return {
            processinglist:[
                
            ],
            finishedlist:[
               
            ]
        }
    },
    components:{
        EmptyShow
    },
    created(){
        request.get('/order/getall').then(result=>{
            result.data.orderstrArray.forEach(item=>{
                let temporder = JSON.parse(item.trim())

                if(temporder.finished == '0'){
                    let order = {}
                    order.OrderId = temporder.OrderId
                    
                    let sumprice = 0
                    temporder.JuiceList.forEach(val=>{
                        sumprice += val.JuicePrice * val.count
                    })

                    order.OrderPrice = sumprice.toFixed(2)
                    
                    order.time = new Date(parseInt(temporder.OrderId)).toDateString()
                    this.processinglist.push(order)
                }
                else{
                    let order = {}
                    order.OrderId = temporder.OrderId
                    
                    let sumprice = 0
                    temporder.JuiceList.forEach(val=>{
                        sumprice += val.JuicePrice * val.count
                    })

                    order.OrderPrice = sumprice.toFixed(2)
                    
                    order.time = new Date(temporder.OrderId).toLocaleString()
                    this.finishedlist.push(order)
                }
            })

            setTimeout(()=>{
                this.$store.commit('iconhidden')
            },1000)
            
        })
    },
    methods:{
        closeshowall(){
            this.$emit('close')
        }
    }
  }
</script>
<style scoped>
  .showallorders-container{
      width:100vw;
      height:100vh;
      position:absolute;
      top:0;
      left:0;
      z-index: 156;
  }

  .showallorders-mask{
      z-index:157;
      width:100vw;
      height:100vh;
      position:absolute;
      top:0;
      left:0;
      background-color: rgba(50,50,50,0.4);
  }

  .showallorders{
      width:70vw;
      height:70vh;
      margin:15vh 15vw;
      background-color: azure;
      border-radius: 2px;
      animation: showallordersappear 1s;
      position: absolute;
      z-index: 158;
  }

  .left-half-block,.right-half-block{
      width:35vw;
      height:70vh;
      display: inline-block;
      box-sizing: border-box;
      
  }

  .right-half-block{
      border-left: 1px rgb(200,200,200) solid;
  }

  .left-half-block .header-block,.right-half-block .header-block{
      width:100%;
      height:10vh;
      text-align: center;
      line-height: 10vh;
      font-size: 25px;
      color: white;
      font-weight: 800;
      text-shadow: 1px 1px black;
  }

  .left-half-block .header-block{
      background-color: rgb(250,195,194);
  }
  
  .right-half-block .header-block{     
      background-color: rgb(25,209,233);
  }

  .left-half-block .operate-line,.right-half-block .operate-line{
      width:100%;
      height:6vh;
      border-bottom: 1px solid rgb(200,200,200);
  }

  .left-half-block .table-head,.right-half-block .table-head{
      width:100%;
      height:5vh;
      border-bottom: 1px solid rgb(200,200,200) !important;
      font-weight: 800;
      background-color: rgb(250,250,250);
  }

  .left-half-block .items-container,.right-half-block .items-container{
      width:100%;
      height:49vh;
      overflow-x: hidden;
      overflow-y: scroll;
  }

  .showallorders .item{
      height:5vh;
      display: flex;
      flex-direction: row;
      width: 100%;
      border-bottom: 1px solid rgba(200,200,200,0.5);
  }

  .showallorders .item{
      color: rgba(100,100,100);
  }

  .showallorders .item-room{
      flex:1;
      line-height: 5vh;
      text-align: center;
      height:5vh;
  }

  .showallorders .item-button:not(.head-room){
      width:80%;
      height:4vh;
      margin:auto;
      margin-top:0.5vh;
      line-height: 4vh;      
      cursor: pointer;
      color: azure;
      text-shadow: 1px 1px 3px black;
  }

  .showallorders .left-half-block .item-button:not(.head-room){
      background-color: rgb(250,195,194);
  }

  .showallorders .right-half-block .item-button:not(.head-room){
      background-color: rgb(25,209,233);
  }

  @keyframes showallordersappear{
      0%{
          transform: translateX(-100vw);
      }
      100%{
          transform: translateX(0);
      }
  }
</style>