// 1.array destructuring 
const numbers = [42,65];
// const x = numbers[0];
// const y = numbers[1];

// const [x , y] = [42,65];

const [x , y] = numbers;

function boxify (num1 , num2) {
    const nums = [num1 ,num2];
    return nums;
}

// const [first ,second] = [90,34]
const [first ,second] = boxify(90,34);

const student = {
    name:'rakib',
    age:22,
    movie:['king khan','priotoma']
}

const [firstMovie,seconMovie] = student.movie;


//objects destructuring
const {name , age } = {name:'alu' , age:14 };
const {id , salary } = {id:12, name:'alu' , salary:3400, age:14 };
 
// console.log(boxify(90,34));

const empolyes = {
    ide:'VS Code',
    designation:'Developer',
    machine:'mac',
    languages:['html','css','javascript'],
    specification:{
        height:65,
        wigth:67,
        address:'kumarkali',
        drink:'water',
        watch:{
            color:'black',
            price:500,
            brand:'garmin'
        }
    }
}

const {machine,ide} = empolyes;
const {weight,address} = empolyes?.specification;
const {brand} = empolyes?.specification?.watch;
console.log(machine ,ide);
console.log(weight);
console.log(brand);

console.log(empolyes.specification);