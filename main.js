// var john = {
//     name: 'John',
//     yearOfBirth: 1986,
//     job: 'Developer'
// }

// let Person = function (name, yearOfBirth, job)  {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job


// };



// var Ganesh = new Person('Ganesh', 1986, 'Solution Architect');

// Person.prototype.lastName = "Acharya";

// Person.prototype.setLastName = function (name, yearOfBirth, job, lastName)  {

//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.lastName = lastName


// };


// var Reshma = new Person('Reshma', 1989, 'Banker', 'Kumari');

// Reshma.setLastName('Reshma', 1989, 'Banker', 'Kumari');


  // code goes here  

//   function fact(num) {
  
//   let factorial = 1;
  
//   for(let i=num; i > 1; i--) {
      
//       factorial = factorial * i;
      
//   }
  
//   return factorial; 

// }

// console.log(fact(3))
         
// let yearsOfBirth = [1982, 1986, 1989, 2006];
// let fullAges = [];

// function isFullAge(yearOfBirth) {

//   return (2019-yearOfBirth) > 18

// }

// for(let i=0; i<yearsOfBirth.length; i++) {

//   fullAges[i] = isFullAge(yearsOfBirth[i]);

//   if (fullAges[i] >= 18)
//     console.log('Person with DOB: ' + yearsOfBirth[i] + ' is now ' + (2019 - yearsOfBirth[i]) + ' years old, and is of Full Age');
//   else
//     console.log('Person with DOB: ' + yearsOfBirth[i] + ' is now ' + (2019 - yearsOfBirth[i]) + ' years old, and is not of Full Age yet!')
  
// }

// console.log(yearsOfBirth);
// console.log(fullAges);

// function FirstFactorial(num) { 

  
//   if (num > 1)
//     return num * FirstFactorial(num - 1)
//   else
//     return 1
         
// }
   
// // keep this function call here 
// console.log(FirstFactorial(6));   

// let a = 100;

// first();

// function first() {

//   let b = 50;

//   console.log( a + b);

//   second();

//   function second() {

//     let c = 25;

//     console.log( a + b + c );

//     third();
//   }

//   function third() {

//     let d = 12.5;
//     console.log( a + b  + c + d);

//   }

// }


// let a = window.prompt();

// console.log('You pressed : ' + a)

// function sayHello(name) {
//   alert("hello Mr. " + name + ' ' + this);

// }
// sayHello(window.prompt('Enter your name please'));

// var Person = function(name, yearOfBirth, job) {

//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   // this.calculateAge = function() {
//   //   return 2019 - this.yearOfBirth;
//   // }

// };



// var Ganesh = new Person('Ganesh', 1986, 'Developer');

// Person.prototype.calculateAge = function() {
//   return (2018 - this.yearOfBirth);
// }


// console.log(Ganesh.calculateAge())

//Prototype Chain in browser console

// var Person = function(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var john = new Person('John', 33);

//Primitives v/s Objects


// var a = 10;
// var b = a;

// var obj1 = {
//   name: 'Ganesh',
//   age: 33
// };

// var obj2 = obj1;

// obj2.age = 34;

// var a = 100;

// var obj = {
//   name: 'JavaScript'
// };

// function simple(first, second) {
// first = 200;
//   second.name = 'Java';
// }


// simple(a, obj);

// var val2 = test(function() {
//   return 'Hello';
// })

// val2();


// function test(a) {

//   var val1 = a();

//   return function() {
//     console.log(val1);
//   }

// }

//Functions as argument and return type

// var years = [1986, 1989, 1991, 2007];
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// console.log(arrayCalc(years, isOfFullAge))

// var heartRates = arrayCalc(ages, maxHeartRate);

// console.log(heartRates)


// function arrayCalc(years, fn) {

//   var arrRes = [];

//   for (let index = 0; index < years.length; index++) {
    
//     arrRes.push(fn(years[index]));

//   }

//   return arrRes;

// }

// function calculateAge(yearOfBirth) {
//   return 2019 - yearOfBirth;
// }

// function isOfFullAge(yearOfBirth) {
//   if (calculateAge(yearOfBirth) >= 18) return true
//   else  return false;
// }
// //Max Heartrate based on Age!
// function maxHeartRate(age) {

//   if (age >= 18 && age <= 81) return Math.round(206.9 - (0.67 * age));
//   else return -1;
// }

// //Functions returning functions


// function interviewquestion(job) {
//   if (job === 'designer') {

//     return function(name) {
//       console.log('Hey ' + name + ', can you please explain what UX design means?')
//     }

    
//   } else if (job === 'developer' ){

//     return function(name) {
//       console.log('Hey ' + name + ', can you please list out few features of JavaScript?')
//     }
    
//   }
// }

// var developerQuestion = interviewquestion('developer');

// developerQuestion('Ganesh')

// function game() {

//   var score = Math.random() * 10;
//   console.log(score >= 5)

// }

// game();


// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck)
// })(5);



