const business = 450;
const minister = 350;
const army = 600;
if (business > minister){
    console.log('business man isbigger');
}
else{
    console.log('minister is bigger');
}
//compare 3

if(business > minister && business > army){
    console.log('business is bigger');
}
else if (minister >business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
}


var max = Math.max(business, minister, army);
console.log(max);




function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(154, 241);
console.log('largest is', largest)
