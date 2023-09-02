const s = 'hello world';

document.getElementById('title').innerHTML = s.toUpperCase();

const book1 = {
    title : 'Book one',
    author : 'Pham Cong Son',
    year : '2013',
    getSummary : function(){
        return `${this.author} was written by ${this.title} in ${this.year}`;
    }
};

const book2 = {
    title : 'Book two',
    author : 'jane Doe',
    year : '2013',
    getSummary : function(){
        return `${this.author} was written by ${this.title} in ${this.year}`;
    }
};

console.log(Object.values(book2)[1]);
console.log(Object.keys(book2)[1]);

console.log(book2.title);

// ES5 and ES6 :
// + ES5 :
function Book_One(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const A = new Book_One('Book One','John Doe','2013');A;

const B = new Book_One('Book Two','jane Doe','2016');B;

Book_One.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book_One.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    console.log(years);
}

class Shape{
    constructor(name,radius){
        this.name = name;
        this.radius = radius;
    }
    getname(){
        return this.name;
    }
    getArea(){
        return Math.round(Math.PI * (this.radius * 2));
    }
}

class Circle extends Shape {
    constructor(name,radius){
        super(name);
        this.radius = radius;
    }
    getArea(){
        return 3.1415 * this.radius * this.radius;
    }
}
let shape = new Shape('Hinh Chung',2.3);

console.log('Dien tich cua ' + shape.getname() + ' = ' + shape.getArea());
console.log('Dien tich cua ' + shape.getname() + ' = ' + shape.getArea());

let circle = new Shape('Hinh Tron',2.3);
console.log('Dien tich cua ' + circle.getname() + ' = ' + circle.getArea());

let name = 'Javascript';
let price = 100;

const course = {
    name : name,
    price : price
};

console.log(`Name : ${course.name} + price : ${course.price}`);

let array = ['javascrpit','Nodejs','nextjs'];
let ange = {
    name : 'PHP',
    price : 1000,
    image : 'image-address',
    children : {
        name : 'nodejs'
    }
}

const [a,b,c] =  array;

var {name:parenName , children :{name : childrenName}} = ange;

var {name : par,description = 'def'} = ange;

console.log(description);


