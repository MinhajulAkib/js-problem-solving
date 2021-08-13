//1-6 print using for loop
for(i = 1; i <=6; i++){
    console.log(i);
}

//sum all input
let sum = 0;
for(let i = 1; i<= 6; i++){
    sum = sum + i;
}
console.log(sum);


//decrement 6 to 1

for (let i = 6; i >=1; i--){
    console.log(i);
}

let sum = 0;
for (let i = 6; i >=1; i--){
    sum = sum +i;
}
console.log(sum);
function sum(i){
    if(i == 1){
        return 1;
    }
    return sum(i-1) + i;
}
console.log(sum(6));