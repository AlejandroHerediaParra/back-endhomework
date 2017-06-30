function New(tittle, autor, date, picture, report, locale ){
    this.tittle = tittle;
    this.autor = autor;
    this.date = date; 
    this.picture = picture;
    this.report = report;
    this.locale = locale;
    this.comments = new Array();
    this.print = function(){
        console.log(`TITULO:${this.tittle}\n
        AUTOR:${this.autor}\n
        DATE:${this.date}\n
        PICTURE:${this.picture}\n
        REPORT:${this.report}\n
        LOCATE:${this.locale}\n`);
    };
}

function Section(name){
    this.name = name;
    this.News = new Array();
    this.addNew = function (myNew)
    {
        this.News.push(myNew);
    }
}

function Newspaper(name){
    this.name = name;
    this.coverPage = undefined;
    this.sections = new Array();
    this.comments = new Array();
    this.addSections = function (sectionName)
    {
        this.sections.push(new Section(sectionName));
        this.coverPage = this.sections[0][0];
    }
    this.orderSectionBy = function(Type){
        switch (Type){
            case "name":{
                this.sections.sort(function(section1, section2){
                    return section1.name > section2.name;
                });
                
                break;
            }
            case "size":{
                this.sections.sort(function(section1, section2){
                    return section1.News.length > section2.News.length;
                });
                break;
            }
            this.coverPage = this.sections[0][0];
        }
    };
    this.show = function(){
        this.coverPage.print();
         this.sections.forEach(function(mNews){
             mNews.News.forEach(function(Mynew){
                 Mynew.print();
             });
         });
    }
}





//TEST//////////////////

var laPatria = new Newspaper("Lapatria");
laPatria.addSections("Deportes");
laPatria.addSections("Economicos");
laPatria.addSections("Policial");


var sportsNew = new New("Bolivar El Campeon","Alejandro Heredia","30/20","picture","sskj kjhas jhsk dashkvks", "Sucre");
var policialNew = new New("atraco","Alejandro Heredia","30/20","picture","sskj kjhas jhsk dashkvks", "Sucre");
var economicNew = new New("Inflacion","Alejandro Heredia","30/20","picture","sskj kjhas jhsk dashkvks", "Sucre");
var economic2New = new New("Inflacion2","Alejandro Heredia","30/20","picture","sskj kjhas jhsk dashkvks", "Sucre");
var economic3New = new New("Inflacion3","Alejandro Heredia","30/20","picture","sskj kjhas jhsk dashkvks", "Sucre");

laPatria.sections[0].addNew(sportsNew);

laPatria.sections[1].addNew(economicNew);
laPatria.sections[1].addNew(economic2New);
laPatria.sections[1].addNew(economic3New);
laPatria.sections[2].addNew(policialNew);

laPatria.orderSectionBy("size");

laPatria.coverPage = sportsNew;

laPatria.show();