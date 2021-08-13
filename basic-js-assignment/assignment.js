//problrm 1
//convert seer to mon 
function seerToMon(seer){
    const mon = 40;
    var weight = seer / mon;
    return weight;
    /* if(typeof seer == 'number'){
        var weight = seer / mon;
        return weight;
    }
    else{
        console.log("your input is invalid");
    }
    */
}
var result = seerToMon(200);
console.log(result);


//problem 2
//total price of sell 

/* var shirt = 100;
var pant = 200;
var shoe = 500;*/
function totalSales(shirt, pant, shoe){
    // if(shirt < 0 || pant < 0 || shoe < 0){
    //     return "given positive number"
    // }
    // else if(typeof(shirt) == "number" && typeof (pant) == "number" && typrof(shoe) == "number"){
    const shirtQuantity = shirt * 100;
    const pantQuantity = pant * 200;
    const shoeQuantity = shoe * 500;
    let priceQuantity = shirtQuantity + pantQuantity + shoeQuantity;
    return priceQuantity;
// } else {
//     return "invalid number";
//   }
}

const totalPriceQuantity = totalSales(2,3,4);
console.log(totalPriceQuantity);



// //problem 3
//shirt delivery
function deliveryCost(shirt) {
    const  costFirst100= 100;
    const  costSecond101= 80;
    const  greater200 = 50;
    /*if (shirt < 0){
        return"please enter a positive number"
    }
    else if(typeof(shirt)== "number"){
        */

    if (shirt <= 100) {
        const price = shirt * costFirst100;
        return price;
    }
    else if (shirt <= 200) {
        const price = shirt * costFirst100;
        const secondShirtPrice = shirt * costSecond101; 
        const totalPrice = price + secondShirtPrice;
        return totalPrice;
    }
    else{
        const price = shirt * costFirst100;
        const secondShirtPrice = shirt * costSecond101; 
        const third200 = shirt * greater200;
        const totalPrice = price + secondShirtPrice + third200;
        return totalPrice;
    }
    /*
    else{
        return "invalid number";
    }
    */
    }


/*if (shirt < abcd){
     const price = '' * costFirst100;
        return price;
}
*/
const shirtPrice = deliveryCost(100);
console.log(shirtPrice);




//problem 4
//perfect friend find
const names = ["saiful", "Mahfuz", "eyasin", "faysal", "tamim", "rahat"];
function perfectFriend(names){
    for (const element of names){
    /*   /*if (names.length < 5){
        return"please enter a positive names"
    }
    else if(typeof(names)== "number"){
        */ 
        if(element.length == 5){
            return element;
        }
    }
    /*else{
        return "invalid names"
    }
    */
 }
const friendName = perfectFriend(names);
console.log(friendName);

