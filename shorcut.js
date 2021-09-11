//false
// '', false, null, undefined

// troth
// 'all', ' ', 4, true, {}, []



//check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 10;

} else {
    myVar = 0;
}



//check negative or falsy anything
let myMoney = 100;
if (!myMoney) {
    
}



//shortcut

const money = 80;
let food;
if (money > 100) {
    food = 'nan pan';
}
else {
    food = 'alur borta';
}

//ternary  shortcut
const money = 890;
let food1 = money > 100 ? 'nan pan' : 'cha';
console.log(food1);



const money1 = 499;
let myMoney1 = 299;
let food2 = money1 > 300 && myMoney1 > 200 ? 'coke' : 'water';
console.log(food2);


//number to string conversion
const num1 = 40;
console.log(typeof num1);
const numStr = num1 + '';
console.log(typeof numStr);


//string to number conversion
const input = '400';
const inputNum = +input;   //if you add to the plus mark and will be make a number
console.log(typeof inputNum);


//
let isActive = false;
const showUser=()=>console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

//use && if the left side is true then right side will be executed
isActive && showUser();


//use || if left side is false then right side will be executed
isActive || hideUser();


//toggle boolean
isActive = !isActive;