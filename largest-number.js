function largestNumber(first,second,third){

    if(first > second && first > third){
        return first;
    } 
    else if(second > first && second > third){
        return second;
    }
    else{
        return third;
    }

}
var largest = largestNumber(12, 14, 16);
console.log(largest);