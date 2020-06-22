export default{
    state:{
        imgbaseUrl:'http://www.yjxyjx.club/public/imgbase/',
        currentOrder:[
            {
                "JuiceId":60,
                "JuiceName":"原味奶茶",
                "JuiceSrc":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1981475166,4029771665&fm=26&gp=0.jpg",
                "TodaySales":"24",
                "discount":0.89,
                "JuicePrice":25,
                "BelongTo":"奶茶",
                "imgClass":"nc",
                "count":4
            },
            {
                "JuiceId":61,
                "JuiceName":"焦糖奶茶",
                "JuiceSrc":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1981475166,4029771665&fm=26&gp=0.jpg",
                "TodaySales":"24",
                "discount":0.23,
                "JuicePrice":20,
                "BelongTo":"奶茶",
                "imgClass":"nc",
                "count":1
            },
            {
                "JuiceId":62,
                "JuiceName":"红糖奶茶",
                "JuiceSrc":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1981475166,4029771665&fm=26&gp=0.jpg",
                "TodaySales":"80",
                "discount":0.29,
                "JuicePrice":25,
                "BelongTo":"奶茶",
                "imgClass":"nc",
                "count":2
            },
            {
                "JuiceId":63,
                "JuiceName":"美式咖啡",
                "JuiceSrc":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1981475166,4029771665&fm=26&gp=0.jpg",
                "TodaySales":"24",
                "discount":0.5,
                "JuicePrice":35,
                "BelongTo":"咖啡",
                "imgClass":"cf",
                "count":2
            }
        ],
        currentOrderId:-1,
        currentJuice:{}
    },
    mutations:{
        addJuice(state,juice){
            let id = juice.JuiceId
            let exists = false
            state.currentOrder.forEach(item=>{
                if(item.JuiceId == id){
                    item.count += juice.count
                    exists = true
                }
            })
            if(!exists){
                state.currentOrder.push(juice)
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
            state.currentOrderId = -1,
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
            state.currentOrderId++
            return temp
        }
    },
    action:{

    }
}