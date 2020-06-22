<template>
    <div class="dialog-bg" :visible.sync="dialogFormVisible">
        <div class="dialog-wbg" title="选择数量">
            <div class="dialog-container" :model="form">
                <div class="dialog-txt" label="商品名称" :label-width="formLabelWidth">
                    <div class="dialog-frame" prop="currentJuice.JuiceName" autocomplete="off"></div>
                </div>
                <div class="dialog-txt" label="折扣" :label-width="formLabelWidth">
                    <div class="dialog-frame" prop="currentJuice.discount" autocomplete="off"></div>
                </div>
                <div class="dialog-txt" label="原价" :label-width="formLabelWidth">
                    <div class="dialog-frame" prop="currentJuice.JuicePrice" autocomplete="off"></div>
                </div>
                <el-form-item label="数量" :label-width="formLabelWidth">
                    <el-input v-model="currentJuice.count" placeholder="请输入数量">
                    </el-input>
                </el-form-item>
            </div>
            <div slot="footer" class="dialog-footer">
                <div class="dialog-button-focus" @click="dialogFormVisible = false">取 消</div>
                <div class="dialog-button-primary" type="primary" @click="besure">确 定</div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
      return {
        dialogFormVisible: false,
        currentJuice: {
          JuiceName: '',
          discount:'',
          JuicePrice:'',
          count: '',
          delivery: false,
          type: [],
        },
        formLabelWidth: '120px',
        count:1
      };
    },
    props:{
        JuiceId:{
          type:Number,
          required:false,
          default:1
        },
        JuiceName:{
          type:String,
          required:false,
          default:'不知名的饮料'
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
    methods:{
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
        background: rgba(100,100,100,0.4);
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
    }
    .dialog-container{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
    }
    .dialog-txt{

    }
    .dialog-frame{

    }
    .dialog-footer{

    }
    .dialog-button-focus.dialog-button-primary{ 
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

    }
    .dialog-button-primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    } 



</style>