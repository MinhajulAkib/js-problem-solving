// var factorial = 1;
// for (var i = 6; i >= 1; i--){
//      console.log(i);
//      factorial = factorial * i;
// }
// console.log(factorial);


function fact(n){
    if(n == 1){
        return 1;
    }
     return fact(n-1) * n;   
}
console.log(fact(6));
