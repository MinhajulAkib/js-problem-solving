const business = 450;
const minister = 350;
const army = 600;
// if (business > minister){
//     console.log('business man isbigger');
// }
// else{
//     console.log('minister is bigger');
// }

if(business > minister && business > army){
    console.log('business is bigger');
}
else if (minister >business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
}
