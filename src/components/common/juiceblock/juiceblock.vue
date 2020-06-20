<template>
  <div class='juiceblock-container' :style="{'width':BlockWidth,'height':BlockHeight}">
      <div class="juice-img-container">
          <img :src="'http://www.yjxyjx.club:8077/public/imgbase/' + (JuiceId%30+1) + '.jpg'" :title="JuiceName" alt=""/>
      </div>
      <div class="juice-intruduce-container flex-col">
          <div class="juice-name-container">
              <span>{{JuiceName}}</span>
          </div>
          <div class="today-sales flex-hoz">
              <span>今日销量</span>
              <span>{{TodaySales + '/份'}}</span>
          </div>
      </div>
      <div class="discount-container flex-col">
          <div class="preferential-container flex-hoz">
              <span>折扣</span>
              <span>{{discount}}</span>
          </div>
          <div class="price-container flex-hoz">
              <span>原价:￥{{JuicePrice}}</span>
              <span style="color:purple">折扣价:￥{{priceWithDiscount}}</span>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    name:'JuiceBlock',
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
      },
      JuiceName:{
          type:String,
          required:false,
          default:'不知名的饮料'
      },
      TodaySales:{
          type:String,
          required:false,
          default:'0'
      },
      discount:{
          type:Number,
          required:false,
          default:1
      },
      JuicePrice:{
          type:Number,
          required:false,
          default:0
      },
      JuiceId:{
          type:Number,
          required:false,
          default:1
      }
    },
    computed:{
        priceWithDiscount:{
            get(){
                let p = this.JuicePrice * this.discount
                return p.toFixed(2)
            },
            set(){}
        }
    }
  }
</script>
<style scoped>
  .juiceblock-container{
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: rgba(255,255,255,0.3);
      box-shadow: 1px 1px 5px 1px rgba(10,10,10,0.6);
      cursor: pointer;
      border-radius: 1%;
      animation: entrance 0.6s;
  }

  .juiceblock-container:hover{
      transform: scale(1.05);
      transition: all 0.5s;
      background-color: rgba(255,255,255,0.6);
      box-shadow: 1px 1px 5px 2px rgba(10,10,10,0.6);
  } 

  .juice-img-container{
      width:80%;
      height:40%;
      border: rgb(250,195,194) 5px solid;
      background-color: white;
  }

  .juice-img-container img{
      width:70%;
      height:100%;
      display: block;
      margin: auto;
      border-radius: 6px;
      border: rgb(250,195,194) 5px solid;
      border-bottom: rgb(250,195,194) 7px solid;
  }

  .juice-intruduce-container{
      width:80%;
      height:20%;
      
  }

/*以下为饮品介绍部分样式*/

.juice-name-container{
    font-size: large;
    font-weight: 700;
    color: rgba(37, 47, 194, 0.6);
}

.today-sales{
    color: rgba(10,10,10,0.6);
    font-weight: 700;
}

/*以上为饮品介绍部分样式*/

  .discount-container{
      width:80%;
      height:20%;
  }

/*以下为折扣部分*/
  .preferential-container{
    color: rgba(10,10,10,0.6);
    font-weight: 700;
  }

  .price-container{
    color: rgba(10,10,10,0.6);
    font-weight: 700;
  }
/*以上为折扣部分*/

  .flex-col{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .flex-hoz{
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      align-items: center;
  }

@keyframes entrance{
    0%{
        opacity: 0;
        transform: scale(0.8);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
</style>