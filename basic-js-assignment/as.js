function seerToMon(seer){
        const mon = 40;
        if(typeof seer == 'number'){
            var weight = seer / mon;
            return weight;
        }
        else{
            console.log("your input is invalid");
        }
}
var result = seerToMon(200);
console.log(result);

