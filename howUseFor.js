var a= [1,2,3,4,5,6]

//for in
for (var number in a){
	console.log(a)
}


//normal for
for (var i; i<a.length;i++){
	console.log(a[i])	
}

a.forEach(function(number){
	console.log(number)
})


var b = a.map(function(number){
	return number*10
})

var c=a.filter(function(number){
	return number %2 ==0
})

var d=a.every(function(number){
	return number%2==0
})

/*
-For each
-map
-filter
-every
-some
-find
-findindex
-reduce
*/

//template strings: (string interpolation)
console.log(`${name} is ${age} years old.`)