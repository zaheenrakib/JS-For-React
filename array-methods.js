const products = [
    {name:'laptop',price:3200,brand:'lenovo',color:'red'},
    {name:'phone',price:3200,brand:'iPhone',color:'golden'},
    {name:'watch',price:3200,brand:'casio',color:'yellow'},
    {name:'sungalss',price:3200,brand:'raybon',color:'blue'},
    {name:'camera',price:3200,brand:'canon',color:'gray'},
];
//1.map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

//2.forEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {

})

//3.Filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

//4.find
const special = products.find(p => p.name.includes('n'));
console.log(special);