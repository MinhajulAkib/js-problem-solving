function largestNumber(first,second,third){
    if(first > second && first > third){
        console.log('first is grester');
    } 
    else if(second > first && second > third){
        console.log('second is greater');
    }
    else{
        console.log('third is grester');
    }
    
}
const largest = largestNumber(12,14,16);
console.log(largest);