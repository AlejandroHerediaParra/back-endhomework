//ES5
function NewsPaper (params) {
	this.title = params.title;
	this.summary = params.summary;
	this.content = params.content;
	this.date = params.date;
	this.author = params.author;
}

NewsPaper.medium = 'Paper'

NewsPaper.prototype.format = function () {
	return `${this.title}\n${this.summary}\n${this.date}\n${this.author}`	
}

var news1 = new NewsPaper({
	title: 'Bye C. Ronaldo',
	summary: 'Ronaldo leaves RM',
	content: '.....',
	date: '06/23/2017',
	author: 'Pablo Orellana'
})

console.log(news1.format())
NewsPaper.medium

function isRequired(paramName) {
	throw new Error(`${paramName} is required`)
}

//default function parameters
function printInvoice (item = isRequired('Item'), price = 100) {
	//ES5
	//price = price || 100 
	//if (!item) {
	//	throw new Error('Item is required')
	//}

	console.log(`${item} - ${price}Bs.`)
}

printInvoice(undefined, 100)
