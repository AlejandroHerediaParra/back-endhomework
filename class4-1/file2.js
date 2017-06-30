var person = {
    name : 'JUan',
    sayHi() {
        console.log(`I am ${this.name}`)
    }
}

var car = {
    brand: 'Nisan',
    model: 'CX5'
}

//to export multiple things per file
exports.person = person
exports.car = car

//to export one thing per file
//module.exports = person;