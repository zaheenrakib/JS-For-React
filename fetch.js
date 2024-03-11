// 1. JSON => stringify ,parse

const student = {
    name:'rakib',
    age:22,
    movie:['king khan','priotoma']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentOBJ = JSON.parse(studentJSON);
// console.log(studentOBJ);


//2 Fetch
fetch('url')
   .then(res => res.json())
   .then(data => console.log(data));

// keys ,values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [23,54,67,87,23,78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array like objects
// loop on array useing for in 

// add or remove from an array
const products = [
    {name:'laptop',price:3200,brand:'lenov',color:'red'},
    {name:'phone',price:3200,brand:'iPhone',color:'golden'},
    {name:'watch',price:3200,brand:'casio',color:'yellow'},
    {name:'sungalss',price:3200,brand:'raybon',color:'blue'},
    {name:'camera',price:3200,brand:'canon',color:'gray'},
];


const newProduct = {name:'webcam',price:700,brand:'Lal' };

//copy products array and then add newProduct
const newProducts = [...products , newProduct];

// create a new array without one specific item
//remove phone means create a new array without the phone 
const remaining = products.filter(p => p.name !=='phone');