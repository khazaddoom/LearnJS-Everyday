// // var john = {
// //     name: 'John',
// //     yearOfBirth: 1986,
// //     job: 'Developer'
// // }

// // let Person = function (name, yearOfBirth, job)  {

// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// //     this.job = job


// // };



// // var Ganesh = new Person('Ganesh', 1986, 'Solution Architect');

// // Person.prototype.lastName = "Acharya";

// // Person.prototype.setLastName = function (name, yearOfBirth, job, lastName)  {

// //     this.name = name;
// //     this.yearOfBirth = yearOfBirth;
// //     this.job = job;
// //     this.lastName = lastName


// // };


// // var Reshma = new Person('Reshma', 1989, 'Banker', 'Kumari');

// // Reshma.setLastName('Reshma', 1989, 'Banker', 'Kumari');


//   // code goes here  

// //   function fact(num) {

// //   let factorial = 1;

// //   for(let i=num; i > 1; i--) {

// //       factorial = factorial * i;

// //   }

// //   return factorial; 

// // }

// // console.log(fact(3))

// // let yearsOfBirth = [1982, 1986, 1989, 2006];
// // let fullAges = [];

// // function isFullAge(yearOfBirth) {

// //   return (2019-yearOfBirth) > 18

// // }

// // for(let i=0; i<yearsOfBirth.length; i++) {

// //   fullAges[i] = isFullAge(yearsOfBirth[i]);

// //   if (fullAges[i] >= 18)
// //     console.log('Person with DOB: ' + yearsOfBirth[i] + ' is now ' + (2019 - yearsOfBirth[i]) + ' years old, and is of Full Age');
// //   else
// //     console.log('Person with DOB: ' + yearsOfBirth[i] + ' is now ' + (2019 - yearsOfBirth[i]) + ' years old, and is not of Full Age yet!')

// // }

// // console.log(yearsOfBirth);
// // console.log(fullAges);

// // function FirstFactorial(num) { 


// //   if (num > 1)
// //     return num * FirstFactorial(num - 1)
// //   else
// //     return 1

// // }

// // // keep this function call here 
// // console.log(FirstFactorial(6));   

// // let a = 100;

// // first();

// // function first() {

// //   let b = 50;

// //   console.log( a + b);

// //   second();

// //   function second() {

// //     let c = 25;

// //     console.log( a + b + c );

// //     third();
// //   }

// //   function third() {

// //     let d = 12.5;
// //     console.log( a + b  + c + d);

// //   }

// // }


// // let a = window.prompt();

// // console.log('You pressed : ' + a)

// // function sayHello(name) {
// //   alert("hello Mr. " + name + ' ' + this);

// // }
// // sayHello(window.prompt('Enter your name please'));

// // var Person = function(name, yearOfBirth, job) {

// //   this.name = name;
// //   this.yearOfBirth = yearOfBirth;
// //   this.job = job;
// //   // this.calculateAge = function() {
// //   //   return 2019 - this.yearOfBirth;
// //   // }

// // };



// // var Ganesh = new Person('Ganesh', 1986, 'Developer');

// // Person.prototype.calculateAge = function() {
// //   return (2018 - this.yearOfBirth);
// // }


// // console.log(Ganesh.calculateAge())

// //Prototype Chain in browser console

// // var Person = function(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // var john = new Person('John', 33);

// //Primitives v/s Objects


// // var a = 10;
// // var b = a;

// // var obj1 = {
// //   name: 'Ganesh',
// //   age: 33
// // };

// // var obj2 = obj1;

// // obj2.age = 34;

// // var a = 100;

// // var obj = {
// //   name: 'JavaScript'
// // };

// // function simple(first, second) {
// // first = 200;
// //   second.name = 'Java';
// // }


// // simple(a, obj);

// // var val2 = test(function() {
// //   return 'Hello';
// // })

// // val2();


// // function test(a) {

// //   var val1 = a();

// //   return function() {
// //     console.log(val1);
// //   }

// // }

// //Functions as argument and return type

// // var years = [1986, 1989, 1991, 2007];
// // var ages = arrayCalc(years, calculateAge);
// // console.log(ages);

// // console.log(arrayCalc(years, isOfFullAge))

// // var heartRates = arrayCalc(ages, maxHeartRate);

// // console.log(heartRates)


// // function arrayCalc(years, fn) {

// //   var arrRes = [];

// //   for (let index = 0; index < years.length; index++) {

// //     arrRes.push(fn(years[index]));

// //   }

// //   return arrRes;

// // }

// // function calculateAge(yearOfBirth) {
// //   return 2019 - yearOfBirth;
// // }

// // function isOfFullAge(yearOfBirth) {
// //   if (calculateAge(yearOfBirth) >= 18) return true
// //   else  return false;
// // }
// // //Max Heartrate based on Age!
// // function maxHeartRate(age) {

// //   if (age >= 18 && age <= 81) return Math.round(206.9 - (0.67 * age));
// //   else return -1;
// // }

// // //Functions returning functions


// // function interviewquestion(job) {
// //   if (job === 'designer') {

// //     return function(name) {
// //       console.log('Hey ' + name + ', can you please explain what UX design means?')
// //     }


// //   } else if (job === 'developer' ){

// //     return function(name) {
// //       console.log('Hey ' + name + ', can you please list out few features of JavaScript?')
// //     }

// //   }
// // }

// // var developerQuestion = interviewquestion('developer');

// // developerQuestion('Ganesh')

// // function game() {

// //   var score = Math.random() * 10;
// //   console.log(score >= 5)

// // }

// // game();


// // (function(goodLuck) {
// //   var score = Math.random() * 10;
// //   console.log(score >= 5 - goodLuck)
// // })(5);

// //CLossures

// // function interviewquestion(job) {
// //     if (job === 'designer') {

// //       return function(name) {
// //         console.log('Hey ' + name + ', can you please explain what UX design means?')
// //       }


// //     } else if (job === 'developer' ){

// //       return function(name) {
// //         console.log('Hey ' + name + ', can you please list out few features of JavaScript?')
// //       }

// //     }
// //   }

// //   var developerQuestion = interviewquestion('developer');

// //   developerQuestion('Ganesh')

// //CLossures

//   // function interviewQuestion(job) {


//   //   return function(name) {

//   //     if (job === 'developer') {

//   //       console.log('Hello ' + name + ', can you explain who is web developer?');

//   //     } else if (job === 'teacher') {

//   //       console.log('Hello ' + name + ', what all subjects do you teach?');

//   //     } 
//   //   }


//   // }



//   // interviewQuestion('teacher')('Reshma');


// //   var john = {
// //     name: 'John',
// //     age: 26,
// //     job: 'teacher',
// //     presentation: function(style, timeOfDay) {
// //       if (style === 'formal') {

// //         console.log('Good ' + timeOfDay + ' ladies and gentlemen, I\'m a ' + this.name + ',  I\'m ' + this.age + ' years old and I\'m a ' + this.job)

// //       } else if (style === 'friendly'){

// //         console.log('Hey whats up? I\'m a ' + this.job + ', I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay)

// //       }
// //     }
// //   }


// //   //john.presentation('formal', 'morning');

// //   var Ganesh = {
// //     name: 'Ganesh',
// //     age: 33,
// //     job: 'Developer'
// //   };


// //   //john.presentation.call(Ganesh, 'formal', 'afternoon');

// //   //john.presentation.apply(Ganesh, ['friendly', 'morning']);

// // var GaneshFormal = john.presentation.bind(Ganesh, 'formal');

// // GaneshFormal('day')

// // var years = [1956, 1986, 1989, 2000, 1982];

// // function arrayCalc(arr, fn) {

// //   var res = [];

// //   for (let index = 0; index < arr.length; index++) {
// //     res.push(fn(arr[index]));

// //   }
// //   return res;
// // }


// // function calculateAge(yearOfBirth) {
// //   return 2019 - yearOfBirth;
// // }

// // function isFullAge(fullAgeLimit, age) {
// //   return age >= fullAgeLimit;
// // }

// // var ages = arrayCalc(years, calculateAge);

// // console.log(ages);

// // console.log(arrayCalc(ages, isFullAge.bind(this, 20)))

//  (function () {
//   var Question = function(questionString, answers, correctAnswerIndex) {
//   this.questionString = questionString;
//   this.answers = answers;
//   this.correctAnswerIndex = correctAnswerIndex;

// };

// Question.prototype.display = function() {
//   return this.questionString + '\n' + this.answers;
// }
// Question.prototype.isCorrectAnswer = function(answerIndex) {
//   if (answerIndex == this.correctAnswerIndex)  return 'Correct!';
//   else  return 'InCorrect!'
// }

// var q1 = new Question('How many planets are there in our Solar System?', ['0. One', '1. Seven', '2. Nine'], 2);
// var q2 = new Question('What is the name of our Planet?', ['0. Earth', '1. Moon', '2. Pluto'], 0);
// var q3 = new Question('How many moons does earth have?', ['0. One', '1. Seven', '2. Nine'], 0);

// function random() {

//   var rand = Math.floor(Math.random() * 3);

//   if (rand === 1) {

//     return q1;

//   } else if (rand === 2) {

//     return q2;
//   } else
//     return q3;


// }
// var currentQuestion;
// currentQuestion = random();
// console.log(currentQuestion.display());
// var answer = prompt();

// console.log(currentQuestion.isCorrectAnswer(answer)); })();

// //Deleting Object properties

// // var car = {
// //   model: 'WagonR',
// //   make: 'Maruti Suzuki',
// //   yearOfMake: '2016'
// // };


// console.log(car);

// const p = new Promise((resolve, reject) => {
//   resolve('NullPointerException')
// });


// p.then((res) => {
//   console.log(res);
// },
// (err) => {
//   console.log("Something went wrong: ", err);
// });

// function calculateSquare(value) {
//   return new Promise((resolve, reject)=> {
//     if (typeof value === 'number') resolve(value * value);
//     reject('BadInputException: Invalid input type');
//   });
// }


// calculateSquare('ssfsdf').then(function (value) {  console.log(value)}, function(err) {console.log(err)})


// function printy(value) {
//   return new Promise((resolve, reject) => {
//     resolve(value)
//   })
// }

// printy('*').then(value => {
//                   console.log(value);
//                   return printy(value)
//             }).then(value => {
//               console.log(value);
//               return printy
//             })

// let keys = ["goals", "assists", "penalty_goals", "appearances", "yellow_cards", "second_yellow_cards", "red_cards", "substitute_in", "substitute_out", "subs_on_bench", "minutes_played", "shirt_number", "shots_per_game", "aerials_won"];

// console.log(keys.sort());

// let { name, age} = {
//     name: 'Ganesh',
//     age: 25,
//     address: "Mangalore"
// };

// console.log(`My name is ${name}`)

// let http = require('http');

// console.log(http.get);

// var options = {
//   host: 'https://reqres.in',
//   path: '/api/users?page=2'
// };

// http.get(options, function(resp){
//   resp.on('data', function(chunk){
//     console.log('something!!!')
//   });
// }).on("error", function(e){
//   console.log("Got error: " + e.message);
// });

// var options = {
//   host: 'http://reqres.in',
//   port: 443,
//   path: '/api/users?page=2',
//   method: 'GET'
// };

// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// // write data to request body
// req.write('data\n');
// req.write('data\n');
// req.end();


// http.get('http://reqres.in/api/users?page=2', (err, res, body) => {
//   console.log(res)
// })

// function getEmployees() {
//   // return new Promise((resolve, reject) => {
//   //   http.get('http://dummy.restapiexample.com/api/v1/employees', (res) => {
//   //     resolve(res)
//   //   })

//   // })
//   http.get('http://dummy.restapiexample.com/api/v1/employees', (res) => {
//       console.log(res)
//   });
// }


// getEmployees()

// var http = require('http');
//    http.get('http://eternagame.wikia.com/wiki/EteRNA_Dictionary', function(res){
//         var str = '';
//         console.log('Response is '+res.statusCode);

//         res.on('data', function (chunk) {
//                str += chunk;
//          });

//         res.on('end', function () {
//              console.log(str);
//         });

//   });

// const timerName = 'Array Map'

// const initialArray = (
//   Array(10000000)
//   .fill(null)
// )

// console.time(timerName)

// // initialArray.map(String)
// const newArray = []

// for (let i = 0, l = initialArray.length; i < l; i++) {
//   newArray[i] = String(initialArray[i])
// }

// console.timeEnd(timerName)

// console.log('Hello')

// const https = require('https');

// const options = {
//   hostname: 'reqres.in',
//   port: 443,
//   path: '/api/users?page=2',
//   method: 'GET'
// }

// const req = https.request(options, (res) => {
//   // console.log(`statusCode: ${res.statusCode}`)
//   // // console.log(res.data)
//   // res.on('data', (d) => {
//   //   process.stdout.write(d)
//   //   // console.log(d)
//   // })
//   var body = '';

//   res.on('data', function (chunk) {
//     body = body + chunk;
//   });

//   res.on('end',function(){
//     console.log("Body :" + body);
//     if (res.statusCode != 200) {
//       console.log("Api call failed with response code " + res.statusCode);
//     } else {
//       console.log(null);
//     }
//   });

// })

// req.on('error', (error) => {
//   console.error(error)
// })

// req.end();

// console.log('world')


// let data = [ { name: "Ganesh"}, { name: "Reshma"}, { name: "Pradeep"}, { name: "Rashmi"}];
// let [name] = data;
// console.log(name)

// // var things = ["Table", "Chair", "Fan", "Rug"];
// // var [a, b, c, d, e] = things;
// // console.log(d);


// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//      res.send(`
//      <!DOCTYPE html>
//      <html lang="en">
//      <head>
//      <meta charset="UTF-8">
//      <meta name="viewport" content="width=device-width, initial-scale=1.0">
//      <meta http-equiv="X-UA-Compatible" content="ie=edge">
//      <title>Learning JavaScript - Vanilla</title>
//      </head>
//      <body>
//           <div class = "container">
//                <h1>Product Name</h1>
//                <h3>Short Description</h3>
//                <p>adasdhhpq.ksjdvsidfh;is sidhfishdfioshdfonxknaslndaskd</p>
//           </div>
//      </body>
//      </html>
//      `)
// });

// app.listen(3000);


// const test = rxjs.Observable.create((observer) => {
//      observer.next("Hello World!!!")
// })

// test.subscribe( x => console.log(x))

// const observable = rxjs.Observable.Of("hello", 100, { color: 'red'}, true);

// observable.subscribe()

// const observable = rxjs.Observable.of(document, 'click');

// const texts = rxjs.Observable.of('Hello', 'World');

// texts.do(val => console.log(val))

// console.log([1, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
//     console.log(accumulator, currentValue, currentIndex, array)
//     return accumulator + currentValue;
//   }));
// const Observable = require('rxjs')

// const numbers = Observable.interval(1000);

// const subscription = numbers.subscribe(() => console.log("Done..."))

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3200);

// const rxjs = require('rxjs')

// const temp = rxjs.Observable.create((observer) => {
//     observer.next(500);
// })

// temp.subscribe(val => console.log(val));

// function division(a, b) {
//   return new Promise((resolve, reject) => {

//     if((typeof a) === 'number' && (typeof b) === 'number')
//       resolve(a/b);
//     else
//       reject("Input datatype is wrong!")

//   })
// }


// division(100, 10).then(val => console.log(val))
// division(100, '10').then(val => console.log(val)).catch(err => {
//   console.log(err)
// })


// var a = 100;

// console.log(a)


// myFun();

// var myFun = function() {
//   console.log("My dummy function!")
// }

// var age = 32;

// function myAge() {
//   console.log(age);
//   var age = 33;
//   console.log(age)
// };

// myAge();

// var a = "Hi";
// first();

// function first() {  
//   var b = "Hello";
//   second();
//   function second() {
//     var c = "Bye";
//     third();

//   }
// }

// function third() {
//   var d = "chow";
//   console.log(a + b + c + d)
// }
// var Ganesh = {
//   name: 'Ganesh',
//   yearOfBirth: 1986,
//   calculateAge: function() {
//     console.log(`Hello my name is ${this.name}, I am ${2019-this.yearOfBirth} years old!`);
//   }
// }

// Ganesh.calculateAge();

// var Reshma = {
//   name: 'Reshma',
//   yearOfBirth: 1989
// }

// Reshma.calculateAge = Ganesh.calculateAge;

// Reshma.calculateAge();

// var i = 23;

// var i = 50;

// // for(var i=0; i< 5; i++) {
// //   console.log(i);
// // }

// console.log(i);

// const of = require('rxjs/')

// const hello = of('Hello');

// hello.subscribe(value => console.log(value));

// console.log('World!')
// let Rx = require('rxjs')

// const hello = Rx.of('Hello');

// hello.subscribe(val => console.log(val))

// console.log('world')

// function retirement(retirementCriteria) {
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retirementCriteria - age) + ' years until retirement!')
//     }
// }

// var retirementIndia = retirement(58);

// retirementIndia(1986)

// function interviewQuestion(job) {
//     return function(name) {
//         if(job == 'designer') console.log(`Hello ${name}, can you explain what is UI/UX design?`);
//         if(job == 'developer') console.log(`Hello ${name}, can you explain closures?`);
//     }
// }

// interviewQuestion('developer')('Ashwath')
// interviewQuestion('designer')('Nayana')

// var john = ['john', 26];

// const [name, age] = john;

// console.log(name + ' : ' + age)

// var john = {
//     name: 'John Smith',
//     age: 25
// }


// const { name, age } = john;

// console.log(age)

// let Rx = require('rxjs');
// let RxCompat = require('rxjs-compat/operators');

// // const myObservable = new Rx.Observable(observer => {
// //     observer.next('Apple 1');
// //     observer.next('Apple 2');
// //     observer.complete();
// // });

// // const observer = {
// //     next: emittedValue => console.log(`Something was emitted with value ${emittedValue}`),
// //     error: error => console.log(`Something went wrong...${error}`),
// //     complete: () => console.log(`Stream completed...`)
// // }

// // const sub = myObservable.subscribe(observer);

// // Rx.of(35, 33, 31, 30)
// //     .pipe(
// //         RxCompat.map( item => { age: item })
// //     ).subscribe( value => console.log(value))


// const source = Rx.interval(1000)
//                  .pipe(
//                      RxCompat.tap(() => console.log('Side Effect...'))
//                  );

// const sub1 = source.subscribe();

// const { of }  = require('rxjs');

// of(10, 20).subscribe((value) => console.log(`Emiting...${value}`))

// const { interval }  = require('rxjs');
// const { map, take } = require('rxjs/operators')

// const obs = interval(1000).pipe(
//     map((value) => value + 1),
//     take(5)
// );

// obs.subscribe((value)=> console.log(value));


// const users = [
//     { name: 'Marie', age: 25 },
//     { name: 'Ken', age: 22 },
//     { name: 'Sara', age: 29 },
//     { name: 'Geoff', age: 30 },
//   ];

//   const totalAge = users.reduce((total, currentUser) => {
//     console.log('current total:', total);
//     console.log('currentUser:', currentUser);

//     // just for spacing
//     console.log('\n');

//     return total + currentUser.age;
//   }, 0);

//   console.log(totalAge);



//   function myreduce(array, reducer, initialValue) {
//       array.forEach(element => {
//           console.log(`Current element ${JSON.stringify(element)}`)
//           console.log('current total:', initialValue);
//           console.log('\n');
//           initialValue = reducer(element, initialValue);
//       });
//       return initialValue
//   }

//   function reducer(element, initialValue) {
//       return element.age + initialValue;
//   }

//   console.log(myreduce(users, reducer, 0))

// let arr = [], set = new Set(), n = 500;
// for (let i = 0; i < n; i++) {
//   arr.push(i);
//   set.add(i);
// }


// let result;

// console.time('Array'); 
// result = arr.indexOf(123123) !== -1; 
// console.timeEnd('Array');

// console.time('Set'); 
// result = set.has(123123); 
// console.timeEnd('Set');

// const book = {
//   title: 'CSS Secrets',
//   author: 'Lea Verou',
//   price: 1500,
//   currency: 'INR'
// };


// const { price, currency, ...newBook} = book


// newBook.released = 'yes'

// console.log(book)

// console.log(newBook)

// console.log(book)

// function maxHeartRate(age) {

//   if (age >= 18 && age <= 81) return Math.round(206.9 - (0.67 * age));
//   else return -1;
// }

// function getAge(yearOfBirth) {
//   return 2019-yearOfBirth;
// }

// let yearsOfBirth = [1986, 1982, 1989]
// let ages = arrayCalc(yearsOfBirth, getAge);


// function arrayCalc(arr, operatorFunction) {
//   let result = []
//   arr.forEach(element => {
//     result.push(operatorFunction(element));
//   });
//   return result;
// }
// console.log(arrayCalc(ages, maxHeartRate))

// var printModule = require('./print-message-module')

// printModule.printMessage('Ganesh')


// let products$ = [
//     { id: 100, price: 13000, name: 'Redmi Note 8'},
//     { id: 101, price: 17000, name: 'Redmi Note 8 pro'},
//     { id: 102, price: 45000, name: 'Apple iPhone XR'}
// ]


// products$ = products$.map( product =>
//     ({
//         ...product,
//         price: (product.price +  product.price * 0.15),

//     })
// );

// console.table(products$)


// console.log("I'm about to flip a coin!");

// const flipACoin = new Promise((resolve, reject) => {
//   console.log("I'm flipping the coin!");

//   const flipResult = flip(); //let's say flip() takes a few seconds

//   if(flipResult) {
//     console.log("Here is the coin flip result!", flipResult);
//     resolve();
//   } else {
//     reject();
//   }
// }).then(() => {
//   console.log("I have flipped the coin.")
// }).catch(err => console.error(err));

// console.log("I have flipped the coin.")

// function flip() {
//     setTimeout(() => {
//      return {}   
//     }, 2000);
// }


let input = 'hello world'

console.log((input => {
    if (input.length < 3) return 'INVALID'
    return input.slice(1, input.length - 1);
})(input));


console.log(((someString) => someString.length > 2 ? someString.slice(1, -1) : undefined)(input))