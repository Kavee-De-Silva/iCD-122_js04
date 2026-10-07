//console.log("hello");

//let , var, const
/*
{
    var name = "John";
    let age = 30;

    console.log(age); 
}

console.log(name);
console.log(age);
/*
//const

let age = 30;
console.log(age);

age = 25;
console.log(age);

const number = 1;
console.log(number);

number = 2; 
console.log(number);

/*
//
let customerList = ["John", "Jane", "Bob"];
console.log(customerList);

customerList ="Alice";
console.log(customerList);

const customerList = ["John", "Jane", "Bob"];
console.log(customerList);

customerList.push("Alice");
console.log(customerList);
*/


// Array Methods
// push method  add an new value into the array
/*
const number = [];
number.push(1);
number.push(2);
number.push(3);
number.push(4);
console.log(number);
number.reverse();
console.log(number);
*/

//filter
const productList =[
    {name: "bun", inStock: true, price: 100},
    {name: "milk", inStock: false, price: 200},
    {name: "bread", inStock: true, price: 300},
    {name: "egg", inStock: false, price: 400},
    {name: "butter", inStock: true, price: 500}
];

console.log(productList);
//inStockProducts object array copied productList object array order
let inStockProducts= productList.filter(//filter- use for grab object line by line
    function(product){//create function and make an object called product
        return productFilter(product);
    }
);

function productFilter(product){
    return product.inStock==true;
}
console.log(inStockProducts);


// function

// - 1 method
function addnumbers(num1, num2){
    return num1 + num2;
}
console.log(addnumbers(5, 10));

// - 2 method
let getsum = function(num1, num2){
    return num1 + num2;
};
console.log(getsum(5, 10));


// - 3 method - arrow function
let getTotal = (num1, num2) => {
    return num1 + num2;
};
console.log(getTotal(5, 10));

// - 4 method -  anonymousarrow function
(num1, num2) => {
    return num1 + num2;
}

// Arrow function with single parameter
let textvalue = textValue => {
    return textValue;
}
console.log(textvalue("Hello, World!"));

//Arrow function with single parameter - short hand
let sample = textValue1 => textValue1;
console.log(sample("Hello, World 2"));


//sorting array of objects

const leterList = ["D", "A", "C", "B", "E","Z", "N", "L", "I", "O "];
console.log(leterList);

const sortArray = leterList.sort();
console.log(sortArray);

//map

const salaryList = [50000, 60000, 70000, 80000, 90000];
console.log(salaryList);
console.log(salaryList.map(salary => salary * 2));

//find - method
const studentList =[
    {name: "Saman", age: 20, gender: "male"},
    {name: "Nimal", age: 22, gender: "female"},
    {name: "Kamal", age: 25, gender: "male"},
    {name: "Sunil", age: 30, gender: "male"},
    {name: "Kumara", age: 28, gender: "male"},
];

let foundStudent = studentList.find(student => student.age > 25);
console.log(foundStudent);


// JSON - javascript object notation
// res- response 
fetch('/customer.json').then(res => res.json()).then (data => {
    
     console.log(data)
    });