// 1. How to declare a variable using let and const
const fatherName = 'Halim';
let season = 'winter';
season = 'rainy';

// 2. condition
// 6 basic condition: >,<, === , !==, <=, >=
// multiple conditions:&& , ||

if(fatherName === 'Halim' || season === 'winter'){

}
else if (fatherName === 'Halim'){

}
else{

}
// 3. array declar
//index,
//length,push,
const number = [89,35 ,98,12];
number[0] = 56;

// 4. for loop 
for (let i = 0; i < number.length;i++){
    const number = number[i];
    console.log(number);
}

// 5. function
function multiply (num1,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(25,78);

//6 Objects 
// 3 ways to acess property by name
const student = {
    name:'rakib',
    age:22,
    movie:['king khan','priotoma']
}

const myVariable = 'age';
console.log(student.age);//direct by property
console.log(student['age']);//access via property name string
console.log(student[myVariable]);// access via property name in a variable