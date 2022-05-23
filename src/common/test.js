async function test(){
    console.log("异步函数开始");
    promise = new Promise((resolve)=>{
        setTimeout(() => {
            console.log("暂停在这里了吗？")
            resolve(100)
        }, 3000);
    })
    result = await promise

    console.log(result)
    return result
}

test().then(res=>{
    console.log(res)
})