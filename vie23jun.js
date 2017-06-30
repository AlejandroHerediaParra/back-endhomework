//otro periodico//

//ES%
function NewsPaper(params){
    this.title = params.title;
    this.summary = params.summary;
    this.content = params.content;
    this.date = params.date;
    this.author = params.author;
}

NewsPaper.medium = "Paper"

NewsPaper.prototype = {
    format() {
        return `${this.title}\n${this.summary}\n${this.date}\n${this.author}`
    }
}


NewsPaper.prototype.format = function (){
    return `${this.title}\n${this.summary}\n${this.date}\n${this.author}`
}

var NewsPaper1 = new NewsPaper({
    title: "Bye C. Ronaldo", 
    summary: "Ronaldo lives RM",
    content: "........",
    date: "06/23/2017",
    author: "Alejandro Heredia",
})


console.log(NewsPaper1.format())

//nueva version ES2015

class NewsPaper{
    constructor (params){
    this.title = params.title;
    this.summary = params.summary;
    this.content = params.content;
    this.date = params.date;
    this.author = params.author;
    }
    format (){
    return `${this.title}\n${this.summary}\n${this.date}\n${this.author}`;
    }
    static get medium (){
        return "Paper";
    }
}

var NewsPaper1 = new NewsPaper({
    title: "Bye C. Ronaldo", 
    summary: "Ronaldo lives RM",
    content: "........",
    date: "06/23/2017",
    author: "Alejandro Heredia",
})


console.log(NewsPaper1.format())
//dafault function parameters
function isRequired(paramName){
    trow new Error (`${paramName} is required`)
}


function printInvoice (item = isRequired(`Item`),price=100){
    //ES
    //price=price||100
    //if (!item){
    //    trow new Error (`Item is required`)
    //}
    console.log(`${item} - ${price}Bs`)
}

//printInvoice('bike',100);


////////////////////////TAREA///////////////////


