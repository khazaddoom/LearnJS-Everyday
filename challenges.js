// sum

// function sum(...arguments) {
   
//     let sum = arguments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     console.log(sum)

// }

// sum(1,2);
// sum(1,2,3,4,5,6,7,8,9);
// sum(1)


// challenge 2

// var a = 5,
//     b = 10, c;

//     if (b>a) {
        
//         let c = 2;
//         c = a + b + c;
        
//         console.log(c);

//     }

//     console.log(c);


// function splitAtX(input) {

//     let arr = input.split('X');
//     if(arr[0].length > arr[1].length) return arr[0];
//     else return arr[1];
// }


// console.log(splitAtX('HelsdsadXworlloasdad'));

// (function () {
//     let a = b = 5;
// })();

// console.log(b)

// let john = {
//     name: 'John',
//     yearOfBirth: 1986,
//     calculateAge: function() {
//         return this
//     }
// }

// let terry = {
//     name: 'Terry',
//     yearOfBirth: 1990,
//     calculateAge: () => {
//         return this
//     }
// }

// var jane = {
//     name: "Jane",
    
//     logHello: function (friends) {
//         console.log(this)
//         friends.forEach( function(friend) {
//             console.log(this.name + " says hello to " + friend)
//         });
//     }
// }

// jane.logHello(['John', 'Tina'])


// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Hello'));
// const promises = [promise1, promise2];

// Promise.all(promises).
//   then((results) => results.forEach((result) => console.log(result)));



// ((a, b) => {
//   setTimeout(() => {
//     console.log((() => a * b)());
//   }, 1000);
// })(10, 20)


// const mult = (a, b) => a * b;


// setTimeout(() => {
//   console.log( mult(5, 10))
// }, 1000);

// var obj = {
//   x: 5,
//   y: 20,
//   z: 3
// }

// function mult({ x, y, z}) {
//   return x * y * z; 
// }

// console.log(mult(obj));


// let arr = [1, 2, 3, 4]

// // let [...brr] = arr;

// // brr[0] = 100

// // console.log(arr)

// // console.log(brr)

// let b;

// b = [...arr]

// b.push('new element')

// console.log(b)

// let cars = [
//   { brand: 'Home', price: 13000},
//   { brand: 'Rolls Royce', price: 100000}
// ];


// function carInfo(car) {
//   const str = car.price > 20000? 'very expensive!' : 'cheap...'
//   return `Price of my new ${car.brand} is ${car.price}$ and it is ${str}`
// }

// cars.forEach( car => console.log(carInfo(car)))


// let arr = [ 1, 2, 3, 4]

// let brr = arr.map( value => value *2);

// brr[0] = 1000;


// console.log(arr)

// console.log(brr)


// console.log(window.navigator.userAgent.replace(/\D+/g, ''))

