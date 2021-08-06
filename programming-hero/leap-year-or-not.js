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


//-------
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
