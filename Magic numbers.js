// 简单讲 就是 直接多个地方 用数字  这个 其实 非常 容易犯错的 ～！！！  

// bad 
if(user.status === 0){
    //do something
}

// good  一个地方定义 多个地方 使用  容易维护和 阅读
const USER_STATUS = {
    active: 0,
    inactive: 1,
    banned: 2,
}

if(user.status === USER_STATUS.active){
    //do something
}