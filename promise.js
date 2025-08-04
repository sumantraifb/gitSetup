const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise 1 created");
        resolve()
    },3000)
})

const err = new Error("This is a error handling successfully")

promiseOne.then((res)=>{
    console.log("Promise 1 Consumed");
    
})
.catch((err)=>{
    console.log("Error:",err);
    
})