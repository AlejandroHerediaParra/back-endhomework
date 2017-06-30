//verciones Java
//EcmaScript 5 el clasico
//EcmaScript 2017 ultimo


// declaracion de variables

var myString = 'XD'

let myOtherString = ':v'

const yetAnotherString = ':)'

/*
diferencias en variables
		scope			reassing        hoisting
var    funcion          yet        		yes 		es5
let    block			yet 			no          es2015
const  block			no only type    no          es2015 
*/

//function declaration
function sum(a,b){
	return a+b
}
sum (1,2)
sum(1,2,3,4)
sum(1)
sum()

//function expression
var multiply = function(a,b){
	return a*b;
}

//callback funcion que se envia
function execute (cb,a,b) {
	return cb(a,b)

}

execute (sum,5,10)
execute (multiply,2,9)

function divide (a){
	return function (b){
		return a/b
	}
}

divide(10)(5)

//first order functions


/*////////////////////////
objetos
////////////////////////*/

var name = 'alejandro'

///////////////////////////////////////////
//object literals ES5
var person = {
	name: name,
	age: 27,
	sayHi: function()
	{
		console.log('Hi!!')
	}
}

person.name='alejandro heredia'
person.sayHi()

person['name'] //para acceder por medio de variables
////////////////////////////////////////////






///////////////////////////////////////////

var name='alejandro'
//object literals ES2015
var person = {
	name //object attribute shorthand
	age: 27,
	sayHi(): //object method shorthand
	{
		console.log('Hi!!')
	}
	['date-birth']='21/5/2017' //computed propety
}

person.name='alejandro heredia'
person.sayHi()

person['name'] //para acceder por medio de variables



////////////////////////////////////////////////



//Object creation patterns
//-object literal
//-constructor functions
//-factory functions
//-classes

//-constructor functions //es5
function Person (name,age){
	this.name=name
	this.age=age
	this.sayHi= function(){
		console.log('Hi!!')
	}
	job
}

var pedro = new Person('Pedor',20)



///////////////////////////////////
/*