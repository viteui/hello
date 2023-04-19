// export default {
//     meta:{
//         icon:"IconSuccess",
//         des:"城市"
//     }
// }


// 可以分为 工作台和市场


const workMenu = [
    {
        name: 'city',
        actionId: 'operation.platform.all.trading',
    }
]
const taxiMenu =[
    {
        name: 'city',
        actionId: 'operation.platform.all.trading',
    }
]

const taxi = {
    name: "平台",
    workMenu
}

const work = {
    name: "工作台",
    taxiMenu
}

export default [
    taxi,
    work
]