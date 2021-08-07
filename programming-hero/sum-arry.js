const number = [44,56,45,23,67,45,56,67,89];
let sum = 0;
for(let i = 0; i <number.length; i++){
    const element = number[i];
    sum = sum + element;

}
console.log(sum);

///using function
function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)