const numbers = [23, 52, 56, 44, 77];

const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    subject:['math','english','social']
}

//template string

const about = `my name is ${student.name} and my role is ${student.roll} has number is ${numbers[4]} also subject name is ${student.subject[2]}`;
console.log(about);

//arrow function
const getThousand = () => 1000;
const addNumber = num => num + 50;
const isEven = x => x % 2 == 0;
const addTwo = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//spread operator
const numbers = [55, 44, 333, 6];
const newNum = [...numbers];

numbers.push(10);
// numbers.pop(10);
// numbers.shift();
// numbers.reverse();
console.log(numbers);
console.log(newNum);

//creat a new array from an older array and add an element 

const currentNum = [...numbers, 100];
console.log(currentNum);

