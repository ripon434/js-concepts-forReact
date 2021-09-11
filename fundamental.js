//variable
const fatherName = 'sd';
let season = 'rainy';
season = 'winter';


//condition
//6 basic condition  (>, <, ===, !==, >=. <=)
//multiple condition ( && ,||)

if (fatherName === 'SD' || season === 'rainy') {
    
}
else if (fatherName === 'sd') {
    
}
else {
    
}



//3. Array
//index
//length, push

const numbers = [23, 52, 56, 44, 77];
numbers[0] = 66;


//4. for loop
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}



//5. function

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(5, 6);
// console.log(output);


//6.object

//3 ways to access property by name
const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    subject:['math','english','social']
}



const myVariable = 'subject';
console.log(student.age);  //direct by property
console.log(student['subject']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable 