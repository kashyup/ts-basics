// const button = document.querySelector('button');
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// function add(num1: number, num2: number) {
//     return num1 + num2;
// }

// button.addEventListener('click', function () {
//     console.log(add(+input1.value, +input2.value));
// });

console.log('typescript is running on live reload ...')

function add(n1:number,n2:number,flag:boolean,phrase:string){

    const result = n1+n2
    if(flag){
        console.log(phrase+result);
    }else{
        return result;
    }
};

const number1 = 5;
const number2 = 2.8;
const printResult = false;
const resultPhrase = 'Result is: '
 add(number1,number2,printResult,resultPhrase);

 // writing down a object 

 //< first method ------>
 const person:{
    name:string;
    age:number;
    email:string
 } = {
    name:'max',
    age:25,
    email:'test@example.com',
 }

console.log(person.age);

/* < second method ------>*/

interface User {
    name:string;
    age:number;
    email:string;
}

const user: User={
    name:'user1',
    age:25,
    email:'newTest@example.com'
}

console.log(user.age,user.name,user.email);



interface Product {
    id:string;
    price:number;
    tags:string[];
    details:{
        title:string;
        description:string;
    }
    onSale:boolean;
}

const myProduct :Product= {
    id:'abc1',
    price:12.99,
    tags:['great-offer','hot-deal'],
    details:{
        title:'Red Carpet',
        description:'A great carpet - almost brand-new!'
    },
    onSale:true
}

//types of arrray declaration 

/** you can decalare an array of strings or array of numbers which is known as 
 * specific type of array 
 * for eg 
 * 
 * const arr:number[] = [1,2,3,4];
 * const newArr:string[] = ['a','b','c','d'];
 */



console.log("Title:"+myProduct.details.title);


/** array of any type */

const mixedArray :any[] =[1,2,'hello',true];
mixedArray.push(false);

console.log('mixed-array[2]:'+mixedArray[2]);

const unionArray :(number|string|boolean)[]=['hello',true,3,4,5];
/** order of the array does not matter in this case */
console.log("unionArray[4]:"+unionArray[4]);

/** <---------------Tuples types------------------> */
// in tuples you can add more than one type of data but indexing is fixed
//and you can do push operation on tuples array without erro
const tuplesArray:[number,string]=[1,'hello'];

tuplesArray.push(3);
const tuplesArrayLength=tuplesArray.length;
console.log('tuplesArray length after push:'+tuplesArrayLength);
console.log('tuplesArray[0]:'+tuplesArray[0]);

