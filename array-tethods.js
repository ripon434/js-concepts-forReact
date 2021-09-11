const products = [
    { name: 'laptop', price: 100, brand: 'Apple', color: 'black' },
    { name: 'phone', price: 500, brand: 'doc', color: 'yellow' },
    { name: 'mac', price: 1000, brand: 'lenovo', color: 'blue' },
    { name: 'watch', price: 3000, brand: 'swiss', color: 'green' },
    { name: 'banana', price: 200, brand: 'japanese', color: 'red' }
];

const brand = products.map(product => product.brand);
const name = products.map(productName => productName.name);
const price = products.map(pro => pro.price);

// console.log(brand);
// console.log(name);
// console.log(price);


//when dont get return ,use to the foreach array 


products.forEach(product => console.log(product.brand));
products.forEach(product => console.log(product.price));
products.forEach(product => console.log(product.color));

products.forEach(product => {
    console.log(product.price);
});


                               //filter//

const productsItem = [
    { name: 'laptop', price: 100, brand: 'Apple', color: 'black' },
    { name: 'phone', price: 500, brand: 'doc', color: 'yellow' },
    { name: 'mac', price: 1000, brand: 'lenovo', color: 'blue' },
    { name: 'watch', price: 3000, brand: 'swiss', color: 'green' },
    { name: 'banana', price: 200, brand: 'japanese', color: 'red' }
];

// const cheap = productsItem.filter(product => product.price <= 200);
// const cheap2 = productsItem.filter(product => product.price >= 200);
// console.log(cheap);
// console.log(cheap2);
// const product3 = productsItem.filter(productName => productName.price>1000);
// console.log(product3);

// const uniqueName = productsItem.filter(product => product.name.includes('c'));
// console.log(uniqueName);


                                // fide //

const filterProcess = productsItem.find(prod => prod.name.includes('c'));
console.log(filterProcess);
const filterProcess1 = productsItem.find(prod => prod.color.includes('b'));
console.log(filterProcess1);

