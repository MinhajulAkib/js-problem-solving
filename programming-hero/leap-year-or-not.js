function isLeafYear(year){
    if (year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const leapYear = 2024;
const myYear = isLeafYear(leapYear);
console.log('Is my leap year:', myYear);