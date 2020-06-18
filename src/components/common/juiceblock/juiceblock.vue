<template>
  <div class='juiceblock-container' :style="{'width':BlockWidth,'height':BlockHeight}">
      <div class="juice-img-container">
          <img src="~assets/img/other/replace-no-img.png" title="无图片" alt="" v-if="JuiceSrc==''"/>
          <img :src="JuiceSrc" :title="JuiceName" alt="" v-else/>
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
              <span>折扣价:￥{{priceWithDiscount}}</span>
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
      JuiceSrc:{
          type:String,
          required:false,
          default:''
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
  }

  .juice-img-container img{
      width:100%;
      height:100%;
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

</style>