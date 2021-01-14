// var a=10;
// console.log(a);


// var print = function(){
//     console.log("heloo-deva");
// }


// print();

// function a() {
//     var b = 10;
//     function c() {
//         console.log(b);
//     }
//     c();
// }
// a();

//WEB API

// function a(){
//     var a=7;
//     setTimeout(function(){
//         console.log(a);
        
//     },3000);
//     console.log("Hello");
// }
// a();

// CLOSURE PERFECT EXAMPLE

// function x(){
//     var a = 9;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// z();

// LET CONST VAR

// // let & const - const cannot be reassigned

// //var
// var a =3;
// var a = 4;
// //allowed/
// let b = 0;
// b = 2;
// // not allowed.



//10. CallBacks | Promises | Async
// console.log("start");

// const getUser = (id,CallBack) => {
//     setTimeout(() => {
//         //console.log('Id',id);
//         callBack(id);
//     },3000);
// }

// const user = getUser(1,(val) => {
//     console.log(val); // changes done here;
//     console.log('end');
// });
// console.log('end');

// // we want start id and end


//PROMISES :
//resolve and reject.

//ASYNC:
//console.log(1+2)

var intArr = [10, 20, 30, 40, 50];
function cusmap(arr, init, reduce){
    let last=0;
    for(var i=0; i<arr.length; i++) {   
        console.log(last);
        last = reduce(last,arr[i]);    
    }
    return last;
}    
var output = cusmap(intArr,0,(acc,cur)=> acc + cur);
document.getElementById('output').innerHTML = output;