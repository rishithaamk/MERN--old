let arr=[10,20,30,40];
var double_arr=arr.map((i)=>(i*2));
console.log(double_arr);
//filter
var even =arr.filter((i)=>(i%2===0))
console.log(even);
//reduce

var total =arr.reduce((sum,i)=>(sum+i),0);
console.log(total);
//combine
var result=arr.map((i)=>i*2).filter((i)=>(i%2===0)).reduce((sum,i)=>sum+i,0);
console.log(result)
//prime
const i=4;
var prime=true;
if(i<=1){
    pime=false;
}else{
    for(let j=2;j<i;j++){
        if(i%j===0){
            prime=false;
            break;
        }
    }
}
console.log(prime?"prime number":"not prime number");
//template literals
var name="Rishilucky"
console.log(`my name is ${name}`)
arr.forEach((value,index)=>{
    console.log(index,value);
})
//callback func
var add=(a,b,callback)=>{
    var result=a+b;
    callback(result);
}
add(10,20,(res)=>{console.log(res)})
var main=(callback)=>{
    console.log("I'm Main");
    callback()
}
var demo=()=>{
    console.log("I am callback");
}
main(demo)
//normal func
var demo=()=>{
    console.log("I am callback")
}
demo();
//used again func callback
var main=(myfunc)=>{
    myfunc()
}
main(demo);
//promise
var promise= new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        setTimeout(()=>{
        resolve("Promise resolved");
    },5000)
    }
    else{
        reject("Promise Rejected");
    }
})
promise.then((res)=>console.log(res))
.catch((err)=>consosle.log(err))

//fetching api
//const getData =()=>{
 //   return fetch('https://jsonplaceholder.typicode.com/posts')
//getData().then((res)=>res.json())
//.then((data)=>console.log(data))
//.catch(err=>console.log(err))
//async
const getData =async ()=>{
    try{
    var res= await fetch('https://jsonplaceholder.typicode.com/posts')
    var data=await res.json();
    console.log(data);
}catch(err){
    console.log(err);}
}
getData();


















