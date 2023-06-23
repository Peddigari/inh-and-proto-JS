//question-1
let parent = {
	display: function () {
		console.log('Handson project 12');
	},
};

let child = Object.create(parent);
child.name = function () {
	console.log('Inheritance and prototypes');
};

child.name();
child.display();

//question-2
function Laptop(Model, proccessor) {
	this.Model = Model;
	this.proccessor = proccessor;
}
Laptop.prototype.turnOn = function () {
	console.log('Laptop');
};

function Dell(Model, proccessor) {
	Laptop.call(this, Model, proccessor);
}

Dell.prototype = Object.create(car.prototype);

Dell.prototype.run = function () {
	console.log('My Dell laptop');
};
const mylaptop = new Dell(11, 'i5');
mylaptop.turnOn();
mylaptop.run();
console.log(mylaptop);

//question-3
Array.prototype.addFuntion = function () {
	var sum = 0;
	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	}
	return sum;
};

var arr1 = [4, 5, 0, 0, 2];
var arr2 = [13, 23, 33];
var arr3 = [2, 4, 6, 8, 10, 12];

var add1 = arr1.addFuntion();
var add2 = arr2.addFuntion();
var add3 = arr3.addFuntion();

console.log(add1);
console.log(add2);
console.log(add3);

//question-4
function Allproperties(obj) {
	var Names = [];

	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			Names.push(prop);
		}
	}
	var Property = Object.getPrototypeOf(obj);
	if (Property !== null) {
		var inheritedPropertyNames = Allproperties(Property);
		Names = Names.concat(inheritedPropertyNames);
	}
	return Names;
}

// Example 
var obj = {
	name: 'Shruthi',
	age: 26,
};

function Person() {
	this.gender = 'Female';
}
Person.prototype = obj;

var person = new Person();
person.city = 'Hyderabad';

var NamesOfProperties = Allproperties(person);
console.log(NamesOfProperties);
