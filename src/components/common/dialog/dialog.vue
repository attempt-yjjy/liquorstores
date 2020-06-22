<template>
    <div class="dialog-bg" :visible.sync="dialogFormVisible">
        <div class="dialog-wbg" >
            <div class="dialog-container">
                <div class="dialog-txt">商品名称</div>
                <div class="dialog-frame" >{{$store.state.order.currentJuice.JuiceName}}</div>
                
                <div class="dialog-txt">折扣</div>
                <div class="dialog-frame">{{$store.state.order.currentJuice.discount}}</div>
                
                <div class="dialog-txt" >原价</div>
                <div class="dialog-frame">{{$store.state.order.currentJuice.JuicePrice}}</div>
                
                <div class="count-container">
                    <div class="dialog-item">数量</div>
                    <div class="dialog-input">{{$store.state.order.currentJuice.count}}</div>
                </div>
            </div>
            <div class='dialog-containerimg'>
                <div class="img-container">
                    <img :src="$store.state.order.imgbaseUrl + ($store.state.order.currentJuice.JuiceId % 30 + 1) + '.jpg'"/>
                </div>
                <!-- <div class="dialog-footer"> -->
                <div class="dialog-button-focus"  @click="dialogoff">取 消</div>
                <div class="dialog-button-primary" @click="besure">确 定</div>
                <!-- </div> -->
            </div> 
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        dialogFormVisible: false,
        // currentJuice: {
        //   JuiceName: '',
        //   discount:'',
        //   JuicePrice:'',
        //   count: '',
        //   delivery: false,
        //   type: [],
        // },
        formLabelWidth: '120px',
        count:1
      };
    },
    props:{
        
    },
    methods:{
        dialogoff(){
            this.$emit('dialogoff')
        },
        besure(){
            this.$emit('besure',this.count)
        }
    }
}
</script>

<style>
    .dialog-bg{
        position:absolute;
        top:0;
        left:0;
        width:100vw;
        height:100vh;
        background: rgba(100,100,100,0.5);
        z-index:120;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .dialog-wbg{
        width: 30%;
        height: 50%;
        background-color: #fff;
        display:flex;
        flex-direction: row;
    }
    .dialog-container{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        width: 50%;
        float: left;
    }
    .dialog-containerimg{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        width: 50%;
        float: left;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .dialog-containerimg .img-container{
        height:50%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width:100%;
    }

    .dialog-containerimg .img-container img{
        width:80%;
    }

    .dialog-txt{
        text-align: left;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .dialog-frame{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
    }


    .dialog-button-focus,.dialog-button-primary{ 
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        
    }
    .dialog-button-focus{
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        color: inherit;
        float: left;
    }

    
    .dialog-button-primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        float: left;
    } 

    .count-container{
        height:40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
    }

    .dialog-item{
        padding: 10px 10px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
        flex:1;
    }

    .dialog-input{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 60%;
    }

</style>