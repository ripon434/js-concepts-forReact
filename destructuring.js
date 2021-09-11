//1. array destructuring
const numbers = [43, 64];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [43, 64];

const [x, y] = numbers;

console.log(x, y);

function add(num1, num2) {
    const num = [num1, num2];
    return num;

}
const [firs, second] = add(50, 40);
console.log(firs, second);


console.log(add(50,40));

///////////////////////////////

const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    subject:['math','english']
}

const [firstSub,secondSub]=['math','english']
// const [firstSub, secondSub] = student.subject;
console.log(firstSub,secondSub);

//////////////////////////////////////////////

///////////////////////////////////////////////
              //Object destructuring\\

const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    salary:4000,
    subject:['math','english']
}

const { name, age, salary } = { name: 'abul', age: 43, salary: 4000 };
console.log(name, age, salary);


//......................


const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    salary:4000,
    subject: ['math', 'english'],
    specification: {
        height: 664,
        width: 433,
        address: 'tokyo',
            kiko: {
        name11:'abir'
    }
    },

}
const {name11} = student?.specification?.kiko;
console.log(name11);