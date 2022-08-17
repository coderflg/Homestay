import {defineStore} from "pinia";

/* 获取实时当前开始事件*/
const startDate = new Date()
/* 离开时间 */
const endDate = new Date()
/* 在原来的天数上加上一天 */
endDate.setDate(startDate.getDate()+ 1)

const useMainStore = defineStore("main",{
    state:()=>({
        token: "",

        startDate: startDate,
        endDate: endDate,

        Loading: true
    })
})

export default useMainStore
