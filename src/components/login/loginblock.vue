<template>
  <div class='login-block-container'>
      <div class="login-block">
          <div class="login-total-container sub-container">
              <span>FRONT-END-LOGIN</span>
          </div>
          <div class="login-id-container sub-container">
              <input type="text" v-model="frontendId" placeholder="please input your id"/>
          </div>
          <div class="login-password-container sub-container">
              <input type="password" v-model="password" placeholder="please input your password"/>
          </div>
          <div class="login-button-container sub-container">
              <button @click="submit">LOGIN</button>
          </div>
      </div>
  </div>
</template>
<script>
  import {$} from '../../js/jquery/jq.js'

  export default {
    name:'',
    data:()=>{
        return {
            frontendId:'',
            password:''
        }
    },
    props:{
      
    },
    methods:{
        submit(){
            this.$router.push('/order')
        }
    },
    created:()=>{
        console.log("已创建")
        
    },
    mounted:()=>{
        $(".login-block-container").css({
            'height':screen.availHeight-100 + 'px',
            'width':screen.availWidth + 'px'
        })
    }
  }
</script>
<style scoped>
  .login-block-container{
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }

  .login-block{
      width:20%;
      height:40%;
      /* border: 1px solid black; */
      display: flex;
      flex-direction: column;
      align-items: stretch;
      background-color: rgba(245,218,219,0.6);
      box-shadow: 0 0 3px 1px rgba(100,100,100,0.2);
      animation: login-block-appear 1s;
  }

  .login-block:hover{
      background-color: rgba(245,218,219,0.8);
      transition: all 0.3s;
      box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.4);
  }

  .sub-container{
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }

  .login-total-container{
      font-weight: 700;
      font-size: x-large;
      /* color:rgba(100,100,100,0.8) */
      color:white;
      text-shadow: 1px 1px black;
  }

  .login-id-container input,.login-password-container input{
      width:80%;
      height:50%;
      outline: none;
      border: 2px solid rgba(187,225,234,0.8);
      font-size: 15px;
      padding-left: 1em;
      box-sizing: border-box;
  }

  .login-button-container button{
      width:80%;
      height:60%;
      background-color: rgba(187,225,234,0.6);
      border: none;
      outline: 1px solid rgba(187,225,234,0.8);
      font-size: 14px;
      cursor: pointer;
      font-weight: 500;
      /* color:rgba(100,100,100,0.8) */
      color:white;
      text-shadow: 1px 1px black;
      
  }

  .login-button-container button:hover{
      font-size: 18px;
      /* box-shadow: 0 0 3px 3px rgba(189,180,180,0.4); */
      box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.4);
      letter-spacing: 5px;
      transition: all 0.3s;   
  }

  @keyframes login-block-appear {
      0%{
          opacity: 0;
          transform: translateY(50px);
      }
      100%{
          opacity: 1;
          transform: translateY(0);
      }
  }
</style>