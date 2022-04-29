//root
var root = document.getElementById("root");

////////////////////////
//Hoisting: değişkeni sona yazıyoruz.
// deneme = "Merhabalar";
// let deneme;

// global scope
// var globalScope="global değişken";
// let globalFunction=(p1)=>{
//     p1+=globalScope;
//     console.log(p1)
// }

//local scope (FunctionScope)
// let functionScope=(p1)=>{
//     var localScope="local değişken";
//     p1+=localScope;
//     console.log(p1)
// }
// functionScope("Nasılsın");
// console.log(localScope)

///////////////
//VAR: aynı değişken isminden yazabiliriz
//var

//LET: aynı değişken isminden yazamayız
//let
//const

/////////////
//Template Literal
// let number1 = "Number1";
// let templateLiteral = `template literal 
// multi-line`;

// let templateLiteralInterpolation = `Adım: ${number1}`;


////////////////////////

var deneme55 = {};
console.log(deneme55)

//constructer
let Student = function Student(adi, soyadi, yas) {
    this.adi = adi;
    this.soyadi = soyadi;
    this.yas = yas;
    console.log(this);
}

//instance (new)
var instanceValue = new Student("Hamit", "Mızrak", 37);

//hasOwnProperty: burdaki değer constructer daki eleman mı?
console.log(instanceValue.hasOwnProperty("soyadi"));

//prototype
//Student.prototype.




// var variable1, variable2, variable3, variable4;
// variable1="Html5";
// variable2="Css3";
// variable3="JS";
// variable4="React";

var object = {
    variable1: "Html5",
    variable2: "Css3",
    variable3: "JS",
    variable4: "React",
}

//react yorumlama {}
//react class => className

//template
var template =
    ( <
        div >
        <
        h1 > başlık < /h1> <
        p className = "text-danger" > Lorem ipsum dolor sit amet. < /p> <
        ul className = "list-group" >
        <
        li className = "list-group-item active" > { variable1 } < /li> <
        li className = "list-group-item" > { variable2 } < /li> <
        li className = "list-group-item" > { variable3 } < /li> <
        li className = "list-group-item" > { variable4 } < /li> < /
        ul > <
        /div>
    );

//ReactDOM
ReactDOM.render(template, root);