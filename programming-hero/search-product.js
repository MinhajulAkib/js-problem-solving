const products = [
    { name: 'samsung s3 phone', price: 12000},
    { name: 'asus laptop d43', price: 34000},
    { name: 'samsung note 12', price: 120000},
    { name: 'samsung m32 phone', price: 31000},
    { name: 'sapple', price: 10000},
    { name: 'lg smart watch', price: 100},
]
function searchProducts(products, searchText){
    const matched = [];
    for(const product of products){
        const name = product.name;
        if(name.indexOf('phone') != -1){
            matched.push(product);
        }
    }
    return matched;
}
const match = searchProducts(products,'phone');
console.log(match);