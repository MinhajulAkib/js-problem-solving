const products = [
    { name: 'samsung s3 phone', price: 12000},
    { name: 'asus laptop d43', price: 34000},
    { name: 'samsung note 12', price: 120000},
    { name: 'samsung m32 phone', price: 31000},
    { name: 'sapple', price: 10000},
    { name: 'lg smart watch', price: 100},
];
for(const product of products){
    if(product.price < 10000){
        break;
    }
    console.log(product);
}