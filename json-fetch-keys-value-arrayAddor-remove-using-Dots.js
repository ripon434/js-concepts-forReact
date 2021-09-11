
                                    //json=>   JSON.stringify==json\\
                                 //    JSON.parse(JSON)==js Object\\
const student = {
    
    roll: 3435,
    name:'abul',
    age: 43,
    salary:4000,
    subject:['math','english']
}

const studentJson = JSON.stringify(student);   //json=>   JSON.stringify==json
console.log(student);
console.log(studentJson);

const jsObj = JSON.parse(studentJson); //    JSON.parse(JSON)==js Object
console.log(jsObj);

 







                                  //fetch

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

    //keys,value

const key = Object.keys(student);
const value = Object.values(student);

//  for
const numbers = [44, 33, 22, 66, 88, 77];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 4);

// for of ---> on array like object
//loop in ---> an object using for in





//add or remove an array

const products = [
    { name: 'laptop', price: 100, brand: 'Apple', color: 'black' },
    { name: 'phone', price: 500, brand: 'doc', color: 'yellow' },
    { name: 'mac', price: 1000, brand: 'lenovo', color: 'blue' },
    { name: 'watch', price: 3000, brand: 'swiss', color: 'green' },
    { name: 'banana', price: 200, brand: 'japanese', color: 'red' }
];

const newProduct = { name: 'webcam', price: 1999, brand: 'htc', color: 'sky' };

//copy products array and then add newProduct

const newProducts = [...products,newProduct];
console.log(newProducts);
console.log(products);


//creat a new array without one specific Item
//remove element means creat a new array without the element


const remoBanana = products.filter(product => product.name !== 'banana');
console.log(remoBanana);
