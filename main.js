
  //-----------------------setTimeout()
/*function greet(){
    console.log("Hello MIzan And Safin")
}
setTimeout(greet,10);

function greeting(name){
    console.log(`Hello ${name}`)
}
setTimeout(greeting,3000,"Safin")*/

//------------------------clearTimeout
// function greetingSafin(){
//     console.log("Hello Safin How Are You")
// }
// let timeOutId = setTimeout(greetingSafin,1000);

// clearTimeout(timeOutId);

//--------------------------setInterval

// function sadman(){
//     console.log("Hello safin My son");
// }

// setInterval(sadman,1000);

//---------------------------
/*function sadman(name){
    console.log(`hello my son ${name}`);
}
const myinterval = setInterval(sadman,2000,"Sadman");

clearInterval(myinterval);*/


//=============================setTimeout same as setInterval
// var safin = setTimeout(function safinBaba(){
//    console.log("My heart is Safin");
//    setTimeout(safinBaba,1000)
// },1000)
//  clearTimeout(safin)


//  setTimeout(sahanaj,1000,"Sadman Safin");

//  function sahanaj(name){
//     console.log(`My name is ${name}`);
//     setTimeout(sahanaj,10000,"Sadman");
//  }


 //------------------------------callBack fx
 function sadman(name){
     console.log(`My name is ${name}`);
    }
 function safin(secPara){
        const name = "Sadman safin";
        secPara(name);
   }

 safin(sadman);

 //------------------------------
 function greet(name){
     console.log(`My Heart name  is ${name}`)
 }

 function higherOrderFunction(callback){
     const name = "Sadman Safin";
     callback(name)
 }

 higherOrderFunction(greet);


 // ------------------------------practical Example of Callback Fx


 let nums = [1,5,4,3,2,9,8,7,10];
//  nums.sort((a,b)=> a-b)
 const result = nums.map(n =>  n * 2 )

 var result2 = nums.filter(n => n%2 == 0 )

 console.log(result2)