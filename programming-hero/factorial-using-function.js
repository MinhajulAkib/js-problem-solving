function factorialNumber(fact){
    let factorial = 1;
    for(var i =1; i<= fact; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var fn = factorialNumber(7);
console.log(fn);