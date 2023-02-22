// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('null == undefined', null == undefined);
console.log('null === undefined', null === undefined);
console.log('null == null', null == null);
console.log('null === null', null === null);
console.log('undefined == undefined', undefined == undefined);
console.log('undefined === undefined', undefined === undefined);
console.log('0 == undefined', 0 == undefined);
console.log('0 == null', 0 == null);
console.log('0 === 0', 0 === 0);
console.log("'' == null", '' == null);
console.log("'' == undefined", '' == undefined);
console.log('0 && null', 0 && null);
console.log('0 || null', 0 || null);
console.log('0 && undefined', 0 && undefined);
console.log('0 || undefined', 0 || undefined);
console.log('null || undefined', null || undefined);
console.log('null && undefined', null && undefined);
console.log('undefined || null', undefined || null);
console.log('undefined && null', undefined && null);
console.log('0 && 1', 0 && 1);
console.log('0 || 1', 0 || 1);

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log('array has been modified', arr);
});

// reverse each word in a string

var orgString = 'Welcome to this Javascript Guide!';

var reverseStr = '';

orgString.split(' ').forEach((x, i) => {
  if (i == orgString.split(' ').length - 1) {
    reverseStr += x.split('').reverse().join('');
  } else {
    reverseStr += x.split('').reverse().join('') + ' ';
  }
});

console.log('Original statement: ', orgString);
console.log('reverse of statement: ', reverseStr);

// for(let i = 1; i <= 100; i++){
//   console.log(i,(i % 3 == 0 &&  i % 5 == 0 ? 'FizzBuzz' : i % 3 == 0 ? 'fizz' : i % 5 == 0 ? 'buzz' : ''));
// }

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split('').sort().join('');
  b = b.split('').sort().join('');

  return a === b;
}

console.log(isAnagram('mother', 'thermo'));

// closure in javascript

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      console.log('The counter is currently at: ' + _counter);
    },
  };
}

var c = counter();

c.add(5);
c.retrieve();
c.add(10);
c.retrieve();


function multiply(a){
  return function A(b){
    return function B(c){
      return a*b*c;
    }
  } 
}

console.log(multiply(2)(3)(4));




function fullName(city) {
  return "Hello, this is " + this.first + " " + this.last + " " + city;
}

// bind method create a person object and pass its values to the fullName function
var person = {first: "Foo", last: "Bar"};
console.log(fullName.bind(person, ["hyd"])());

function fullName1(city) {
  return "Hello, this is " + this.first + " " + this.last + " " + city;
}

// call Method
console.log(fullName1.call(person, "hyd"));

function fullName2(city) {
  return "Hello, this is " + this.first + " " + this.last + " " + city;
}

//apply
console.log(fullName2.apply(person,["hyd"]));

const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call(this);