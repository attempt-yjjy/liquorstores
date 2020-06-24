export default {
    state:{
        WhatHappened:0,
        IfRotate:false,
        StatusCusText:'',
        StatusVisible:false
    },
    mutations:{
        startloading(state){
            state.WhatHappened = 0
            state.IfRotate = true
            state.StatusCusText = "loading..."
            state.StatusVisible = true
        },
        loadingsuccess(state){
            state.WhatHappened = 1
            state.IfRotate = false
            state.StatusCusText = "success!"
            state.StatusVisible = true
        },
        loadingfailure(state){
            state.state.WhatHappened = 2
            state.IfRotate = false
            state.StatusCusText = "failure!"
            state.StatusVisible = true
        },
        iconhidden(state){
            state.StatusVisible = false
        }
    }
}