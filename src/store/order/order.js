let request = require('js/request/request.js')
export default{
    state:{
        imgbaseUrl:'http://www.yjxyjx.club:8011/public/imgbase/',
        currentOrder:[
            
        ],
        currentOrderId:-1,
        currentJuice:{
            JuiceId:0,
            JuiceName:'',
            JuicePrice:0,
            TodaySales:'',
            discount:1,
            count:0
        }
    },
    mutations:{
        chooseJuice(state,juice){
            let count = 1
            let tempobject = {}
            for(let key in juice){
                tempobject[key] = juice[key]
            }
            tempobject.count = count
            state.currentJuice = tempobject
        },
        addJuice(state){
            let id = state.currentJuice.JuiceId
            let exists = false
            state.currentOrder.forEach(item=>{
                if(item.JuiceId == id){
                    item.count += state.currentJuice.count
                    exists = true
                }
            })
            if(!exists){
                state.currentOrder.push(state.currentJuice)
            }
        },
        removeJuice(state,id){
            let tempOrder = state.currentOrder.filter(item=>{
                return item.JuiceId != id
            })
            state.currentOrder = tempOrder
        },
        changeCount(state,payload){
            
            state.currentOrder.forEach(item=>{
                if(item.JuiceId == payload.id){
                    if(!(item.count == 1 && payload.value == -1)){
                        item.count += payload.value
                    }
                    
                }
            })
        },
        removeAll(state){
            state.currentOrder = [],
            state.currentOrderId = 100,
            state.currentJuice = {}
        }
    },
    getters:{
        totalPrice(state){
            let sum = 0
            console.log(state.currentOrder)
            state.currentOrder.forEach(item=>{
                sum += item.JuicePrice * item.count
            })
            return sum
        },
        getOrderId(state){
            let temp = state.currentOrderId
            state.currentOrderId = temp + 1
            return temp
        }
    },
    actions:{
        submitOrder(context){
            let orderId = context.getters.getOrderId
            let postdata = {
                data:context.state.currentOrder,
            }
            console.log(postdata)
            request.post('/order/submit',postdata).then(result=>{
                let data = result.data
                if(data.success){
                    console.log("订单提交成功")
                    context.commit('removeAll')
                }
                
            })
        }
    }
}