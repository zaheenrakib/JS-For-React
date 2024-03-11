const number = [89,35,98,12];
const student = {
    name:'rakib',
    age:22,
    movie:['king khan','priotoma']
};

// 1. template string
const about = `My Name Is ${student.name} age of ${student.age} has number ${number[2]} also liked movies ${student.movie[0]}`;
console.log(about); 

//2.arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1,num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator

const newNumber = [...number];
//create a new array from an older array and add an element
const currentNumbers = [...number,55];
number.push(100)
number.push(100)
number.push(100)





console.log(number);
console.log(newNumber);
console.log(currentNumbers);