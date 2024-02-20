// 重复代码 非常多 
// bad 
segments.forEach(function(val){
    if(val.id === 32){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 19){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 21){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 7){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 16){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 10){
        result.push(val);
    }
})
segments.forEach(function(val){
    if(val.id === 11){
        result.push(val);
    }
})
return result;


// good 
function getRightItems(allowedIds){
    const allowedIds = [32, 19, 21, 7, 10, 16, 11]
    segments.filter(val => allowedIds.includes(val.id))
}
