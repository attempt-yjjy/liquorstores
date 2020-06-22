export default{
    state:{
        currentOrder:{},
        currentOrderId:0
    },
    mutations:{
        addJuice(state,juice){
            state.currentOrder.push(juice)
        },
        removeJuice(state,id){
            let tempOrder = state.currentOrder.filter(item=>{
                return item.JuiceId != id
            })
            state.currentOrder = tempOrder
        },
        changeCount(state,id,value){
            state.currentOrder.forEach(item=>{
                if(item.JuiceId == id){
                    item.count += value
                }
            })
        }
    },
    getters:{
        totalPrice(state){
            let sum = 0
            state.currentOrder.forEach(item=>{
                sum += item.JuicePrice * item.count
            })
            return sum
        },
        getOrderId(state){
            let temp = state.currentOrderId
            state.currentOrderId++
            return temp
        }
    },
    action:{

    }
}