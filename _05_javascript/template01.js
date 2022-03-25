//single comment
/* 
multiple comment
*/
/*alert("Merhabalar external js")*/
/////////////////////////////////////
//deneme
//alert("popup");
//alert("popup2");
//window.alert("popup2")
// console.log("loglama")
// document: bu sayfa
// document.write("yazı yazdım")

////////////////////////////////////
// variables
// camel case
// sayı ile başlama
// tire ile ayırma
// $ ile başlayabilirsin
// _ $ ile başlayabilirsin

// var personName = "Hamit";
// console.log(personName);

// var x1;
// var x2;
// var x3;
// x1=44;
// x2=16;
// x3=x1+x2;
// console.log(x3);

// var x1, x2, x3;
// x1 = 44;
// x2 = 16;
// x3 = x1 + x2;
// console.log(x3);

// var isLogin = true;
// console.log(isLogin);

// number ==> sayılar
// string ==> kelimeler
// boolean ==> true false

///////////////////////////
//dynamic type
// var global = 66;
// global = 11;
// console.log(global);

// let local = 44; //ES6(2015)
// local = 15;
// console.log(local)

// const sabit = 3.14; //ES6(2015)
// console.log(sabit)

/////////////////////////////////
// operator
//Logic Operators   &&=ve  ||=veya
//mathematics operators + - * / %
// var x1 = 16,
//     x2 = 4;
// console.log((x1 + x2));
// console.log((x1 - x2));
// console.log((x1*x2));
// console.log((2**5));
// console.log((x1/x2));
// console.log((x1%x2));

//comparison operators
// var x1=16, x2=5;
// =
// ==
// ===
// >
// >=
// <
// <=
// ?

//increment -deicriments
// var x1=10;
// console.log(x1++);
// console.log(x1);

// var x1=10;
// console.log(x1--);
// console.log(x1);

// postfix increment -deicrements
// var x1=10;
// console.log(++x1);
// console.log(x1);

// var x1=10;
// console.log(--x1);
// console.log(x1);

////////////////////////////////////////////
//1byte=8 bit (0 ve/veya 1 bit)
//binary

// console.log(10+20);
// console.log("10"+"20");

//prompt string gelir
//cast
// var x1=Number(prompt("lütfen 1.sayıyı giriniz."));
// var x2=Number(prompt("lütfen 2.sayıyı giriniz."));
// var x3=x1+x2;
// console.log(x3);

//cast
// Number() ==> bu artık sayıdır.
// String() ==> bu artık stringtir.

/////////////////////////////////////////////////
//typeof
// var x1=44;
// console.log(typeof x1);

//undefined
// var x1;
// console.log(x1);

//NaN: Not A Number
// var x1 = prompt("Lütfen bir sayı giriniz.");
// let x2 = x1 ** x1;
// console.log(x2);

//Infinity
// var x1=0/5/0;   //sonsuz
// console.log(x1);
/////////////////////////////////////////////////////
//console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.sqrt(16))  //karekök
// console.log(Math.min(5,6,2,5,2525,-555))
// console.log(Math.max(5,6,2,5,2525,-555))
// console.log(Math.abs(-16))  //mutlak
// console.log(Math.pow(2,5))   //üslü sayılar
// console.log(Math.random()*4+1)  //rastgele sayı
// console.log(Math.ceil(4.1))  //yukarı yuvarlamak
// console.log(Math.floor(4.9))  //aşağı yuvarlamak
// console.log(Math.round(4.4))  //yuvarlama

//////////////////////////////////////////////////////
//Number
//0123456789ABCDEF
// var hexadecimal = 0xFA;
// console.log(hexadecimal) //10 tabanında karşılığı

//binary=2'lik tabanda
//01
// var binary = 0b11;
// console.log(binary)

//bilimsel gösterim
// var bilimsel = 10 - e5;
// console.log(bilimsel);

//Number
// var x1 = Number("16");

//toString
// var sayi = 32;
// console.log(sayi.toString(2));
// console.log(sayi.toString(8));
// console.log(sayi.toString(10));
// console.log(sayi.toString(16));

//NaN
// var isNot = 16 / "asd";
// console.log(isNot);

// isNaN
// var isSayi = 16 / 16;
// console.log(!isNaN(isSayi));

/////////////////////////////////////////////////
//String
// let kelime = "Html5 Css3 Bootstrap Responsive Javascript";


//bütün karakterleri küçük yap
// kelime=kelime.toLowerCase();
// console.log(kelime);
// console.log(kelime.toLowerCase);

//native code: parantez yazmazsak
//bütün karakterleri büyük yap
//console.log(kelime.toUpperCase());

//charAt(0) ==> biz sayı veriyoruz bize o sayıya karşılık gelen harfi veriyor.
//console.log(kelime.charAt(0));

//boşluk bir karakterdir.
//substring= stringi parçalamak
// console.log(kelime.substring(6));
// console.log(kelime.substring(0, 5)) //0<=x<5

//concat: sonuna ekleme yapar.
// console.log(kelime.)

//ile başlıyorsa ==> true
//console.log(kelime.startsWith('H'));

//ile bitiyorsa ==>true
// console.log(kelime.ensdWith('l5 '));
// console.log(kelime.)
// console.log(kelime.)
// console.log(kelime.)
// console.log(kelime.)
// console.log(kelime.)


///////////////////////////////////////////////
//////
//escape characters
//black slash
//console.log("\"Deneme") //çıktısı "Deneme
//console.log('Deneme')

//////////////////////////////////////////////
//validation
//exceprtion handling
// let sayi = 3 / 0;
// console.log(sayi);
// console.log("Merhabalar");

// try {
//kod gövdesi
//     let sayi = 0 / 3;
//     console.log(sayi);
// } catch (error) {
//hata olursa burası devreye girsin
// alert(error.message);
// alert(error.name);
// bileek istisna gelmesini istersek

// } finally {
//     console.log("Burası kesin çalışacak.");
//db.close()
//socket.close()
//

//istisna fırlatırız
//throw "sayıyı sıfıra bölemezsin"
//

// try {
//     merhabalar
//     console.log("2.alan")
//     throw "referans yoktur.";
// } catch (error) {
//     alert(error.message) //istisna mesajıyla bilgilendir
//     alert(error.name) //istisna türü
// }


///////////////////////////////////////////
//1.function
// function deneme1() {
//     let number1, number2;
//     number1 = Math.round(Number(prompt("1.sayı")));
//     number2 = Math.round(Number(prompt("2.sayı")));
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
//deneme1();

//2.function
// function deneme2(number1, number2) { //parametre
//     let number1, number2;
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
//deneme2(10, 2); //argüman

//3.function:return
//eğer bir değişkende kullanmak istersek return kullanırız.
// function deneme3(number1) { //parametre
//     let result = number1 ** number1;
//     return result;
// }
// let deger = deneme3(4);
// console.log(deger);

//4. function
//anonymous function: isimsiz function
// function deneme1() {
//     console.log("Merhabalar")
// }

//5.function
//arrow function
// ()=>{}
// let sayi = (a) => { a * a }

//6.function:
//Immediate function : Hemen Çalışsın
// ()()

////////////////////////////////////////////////

// // //1.evre
// function deneme1() {
//   console.log('Merhabalar Normal Function')
// }
// deneme1()

// // //2.evre
// // //anonymous function direk kullanmak için ===> function(){}
// let result2 = function () {
//   console.log('Merhabalar anonymous function')
// }
// result2()

// //  //3.evre: arrow function
// //arrow function, ===>  ()=>{}
// let result3 = () => {
//   console.log('Merhabalar arrow function')
// }
// result3()

// // 4.evre: Immediate function: hemen kullanmak
// //  ===> ()()
// ;(function deneme() {
//   console.log('Merhabalar Immediate function')
// })()

//////////////////////////////////////////////////////////////////////
//conditional (Şart)
// let sayi="1";
// console.log(typeof sayi)

// if(sayi===1){
//     console.log("sayı 1 eşittir");
// }else{
//     console.log("sayı 1 eşit değildir");
// }

// //Ternary Function ===> () ?  :  ;
// let ter= (sayi===1) ? "sayı 1 eşittir"  :"sayı 1 eşit değildir" ;
// console.log(ter);



// ()()
// let result = () => {
//   let sayi = Number(prompt('Lütfen bir sayı giriniz'))
//   //if elseif else
// if (sayi === 1) {
//     console.log("sayı 1 eşittir.");
// } else if (sayi === 2) {
//     console.log("sayı 3 eşittir.")
// } else if (sayi === 3) {
//     console.log("sayı 3 eşittir.")
// } else if (sayi === 4) {
//     console.log("sayı 4 eşittir.")
// } else if (sayi === 5) {
//     console.log("sayı 5 eşittir.")
// } else if (sayi === 6) {
//     console.log("sayı 6 eşittir.")
// } else if (sayi === 7) {
//     console.log("sayı 7 eşittir.")
// } else if (sayi === 8) {
//     console.log("sayı 8 eşittir.")
// } else if (sayi === 9) {
//     console.log("sayı 9 eşittir.")
// } else if (sayi === 10) {
//     console.log("sayı 10 eşittir.")
//   } else {
//     console.log('sayı 1<=x<=10 dışındadır')
//   }
// }
// result();


// bir dsayının pozitif mi negatif mi olduğunu hesapla

// var x1 = Number(prompt("Lütfen bir sayı girin."));

// if (x1 < 0) {
//     console.log("sayı negatif");
// } else {
//     console.log("sayı pozitif");
// }

// let isNegative = () => {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   let result = number < 0 ? 'negatif' : 'pozitif'
//   console.log(result)
// }
//isNegative();


//////kullanıcıdan bir sayı girilecek tek mi çift mi


// let even = function() {
//     let number = Number(prompt("Lütfen bir sayı giriniz."))
//     if (number % 2 == 0) {
//         console.log('sayı çifttir.')
//     } else {
//         console.log('sayı tektir')
//     }

// }
// even();

// function result5() {
//     let sayi = Number(prompt('Lütfen bir sayı giriniz.'))
//         //switch-case
//     switch (key) {
//         case 1:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 2:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 3:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 4:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 5:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 6:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 7:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 8:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 9:
//             console.log("sayı 1 eşittir.")
//             break;
//         case 10:
//             console.log("sayı 1 eşittir.")
//             break;
//         default:
//             console.log('sayı 1<=x<=10 dışındadır')
//             break
//     }
// }

//////////////////////////////////////////////////////
//Loop
//başlangıç: i=1;
//bitiş: i<=10
//i++ :arttırma
//i=i+1 :arttırma
//i+=1 :arttırma

//for döngüsü
// for(let i=1; i<=10;i++){
// let sayi=Number(prompt(i+". sayı"))
// console.log(sayi)
// }

//1-10 arasında sayılar olsun
//bu sayılar arasındaki 4 sayısını dahil etme

// let toplam() => {
//     let sum = 0; //başlangıç değer 
//     for (let i = 1; i <= 10; i++) {
//         if (i == 4) {
//             continue;  //o değeri es geç
//         }
//         if(i>10)
//         break;  //döngüyü kırmak için
//         sum = sum + i;
//     }
//     console.log("toplamları" + sum)
// }
// toplam();


//while döngüsü
// let i = 1;
// while (i <= 2) {
//     let sayi = Number(prompt(i + ". sayı"))
//     console.log(sayi)
//     i += 1;
// }


//do-while Döngüsü
// let i = 1;
// do {
//     //ister sağlasın ister sağlamasın kesinlikle 1 kere çalışacak
//     console.log("1 kere çalıştı")
//     i++;
// } while (i < 3);


//////////////////////////////////////////////////////////

//1) kullanıcı tarafından alınan bir sayı 1<=x<= kullanıcı adı rastgele oluştursun(tam sayı) Math?
//examples: 2 5 2 3 1
//toplamları
//ortalaması
//en küçük sayı bulsun
//arrow function?
//S.O.L.I.D
//design pattern

//////////////////////////////////////////////////////////
//diziler
//birden fazla datayı saklamak için kullanıyoruz.
// let dizi =[]  -> dizi
// 0. indexle başlar
// length yapısı - boyutu

let dizi = ['html', 'css', 'js', 'Javascript']

//push() ==> sona bir eleman eklemek
//unshift() ==> başa bir eleman eklemek
//pop() ==> sondan 1 eleman çıkar
//shift() ==> baştan 1 eleman çıkar
//Delete ==> istediğim indis numarasındaki dizi elemanını silmek


// let dizi=[1,2,5,3,1];
// console.log(dizi);
// console.log(dizi[5]);    //==>5.indis=6.eleman
// console.log(dizi[dizi.length-1]);
// console.log("+++++++++++++++++++++++")

//iteratif for
// for(let i=0; i<5; i+=){
//     console.log(dizi[i])
// }

// console.log("+++++++++++++++++++++++")
// console.log("for in")

//for in
// for( temp in dizi){
//     console.log(temp " ==> "+dizi[temp])
// }

// console.log("+++++++++++++++++++++++")
// console.log("for of")

//for of
// for( temp of dizi){
//     console.log(temp)
// }

///////
//dizi fonksiyonları

//EKLEME
//*push() ==> sona bir eleman eklemek
// dizi.push("sona eklendi lifo") //iteklemek
// for(temp of dizi){
//     console.log(temp)
// }

//unshift() ==> başa bir eleman eklemek
// dizi.unshift("başa eklendi")
// for(temp of dizi){
//     console.log(temp)
// }

//ÇIKARMA 
//pop() ==> sondan 1 eleman çıkar
// dizi.pop()
// for(temp of dizi){
//     console.log(temp)
// }

//shift() ==> baştan 1 eleman çıkar
// dizi.shift()
// for(temp of dizi){
//     console.log(temp)
// }

//Delete ==> istediğim indis numarasındaki dizi elemanını silmek
// console.log(dizi)
// delete.dizi[2];
// console.log("+++++++++++++++++++")
// for(temp of dizi){
//     console.log(temp)
// }

//sort() ==> küçükten büyüğe doğru sıralama
// console.log(dizi.sort())

//reverse() ==> büyükten küçüğe doğr sıralama
// console.log(dizi.reverse())

//join() ==> dizideki herbir elemana eklemek için
// dizi.join("-logo")
// console.log(dizi)
// for(let i )


// //concat (Birleştirmek)
// //dizide birleştirmek string birleştirmek için kullanabiliriz.
// function concatTutorials() {
//     let kelime1 = 'Merhabalar'
//     let kelime2 = ' Nasılsınız'

//     let birlestir1 = kelime1 + kelime2
//     console.log('1. artı birleştir: ' + birlestir1)

//     let birlestir2 = kelime1.concat(kelime2);
//     console.log('2. concat birleştir: ' + birlestir2)

//     //dizi birleştirmek
//     const dizi1 = ['1', '2', '3', ''];
//     const dizi2 = ['4', '5', '6'];

//     //string olarak birleştirir
//     let diziBirlestir1 = dizi1 + dizi2;
//     console.log(diziBirlestir1)

//     //dizi olarak birleştirir
//     let diziBirlestir2 = dizi1.concat(dizi2);
//     console.log(diziBirlestir2)

// }
// //concatTutorials();


// //******************************************* */
// //dizilerde topluca eklemej veya çıkarmak
// //+++ splice() ++++ Ekle veya Sil
// function spliceTutorials() {
//     let dizi55 = [1, 2, 3, 4, 5, 6, 7];
//     console.log(dizi55);

//     //parametredeki 1.eleman: indisi belirlemek için
//     //parametredeki 2.eleman: kaç tane silinceğini
//     //  dizi55.splice(2, 4) //2.indisten(3.eleman) 4 tane sil  indis=0 başlar
//     //   console.log(dizi55)

//     //parametredeki 1.eleman: indisi belirlemek için
//     dizi55.splice(3, 0, 'ekledim', "Yeni"); //0.indisten başla ekleme
//     console.log(dizi55)
// }
// //spliceTutorials();

// // +++ slice() +++ dizi kopyalamalak
// function sliceTutorials() {
//     let eskiDizi = [1, 2, 3, 4, 5, 6, 7];
//     console.log(eskiDizi)

//     let yeniDizi = eskiDizi.slice(3) //3.indisten başla sonuna kadar kopyala yeniDizi ata
//     console.log(yeniDizi)
// }

// //sliceTutorials();
// //+++++++++++++++++++++++++++++++++++++++++

// // Örnek: 1.dereceden 2 bilinmeyenli denklem
// // Kullanıcıdan aldığımız 2 değişkeni hesaplatarıalım?
// // y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılactır (Arrow function)
// //
// //
// let equationWithUnKnow = () => {
//         let number1, number2, results;
//         number1 = Number(prompt("1.sayı"));
//         number2 = Number(prompt("2.sayı"));
//         result = 3 * number1 + 5 * number2;
//         console.log(result)
//     }
//     //equationWithUnKnow();


// //Örnek: 2 Dereceyi fahrenhaya çeviren function (Anonymous function)
// //Kullanıcıdan alınan dereceyi Fahrenhata çeviren function 
// //Formül: (dereceSayi * 9 / 5) + 32;
// //
// //
// let toFahrenhayt = function() {
//         let degree, result;
//         degree = Number(prompt("Lütfen dereceyi giriniz"));
//         result = (degree * 9 / 5) + 32;
//         console.log(result)
//     }
//     // toFahrenhayt();


// //Örnek6:  1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç
// //
// //
// let sumBut = () => {
//         let sum = 0; //başlangıç bir değer: sıfır etkisiz toplama
//         for (i = 1; i < 10; i++) {
//             if (i % 5 === 0) {
//                 continue;
//                 sum += i;
//             }
//             console.log("toplam: " + sum)
//         }
//     }
//     //sumBut();


// //Örnek7:
// // Kullanıcıdan alınan sayıya göre random sayılar oluştursun
// // 0-) ilk ve son sayının toplamı ?
// // 1-) Toplamları
// // 2-) Ortalaması
// // 3-) Tek sayı toplamları
// // 4-) Kaç tane Tek sayı 
// // 5-) çift sayı toplamları
// // 6-) çift tane Tek sayı 
// //
// //


// //Random
// let rndArray = () => {
//     //değişkenleri(variable)
//     let rndNumber, firstEndSum = 0,
//         number, array = [];
//     number = Number(prompt("Lütfen bir sayı giriniz"));
//     //döngüde rastgele sayı oluşturmak
//     for (let i = 0; i < number; i++) {
//         rndNumber = Number(Math.round(Math.random() * 9 + 1));
//         array[i] = rndNumber;
//     }
//     console.log(array)
//     firstEndSum = array[0] + array[array.length - 1];
//     console.log(firstEndSum)
// }

// //sonarQube
// //rndArray();

// /////////////////////////////
// //debug nedir?
// //debug nasıl yapıılır?
// // let sayi11 = 11;
// // let sayi22 = 22;
// // let sonuc = sayi11 + sayi22;
// // console.log(sonuc);

// //////////////////////////////


// function diziBaslangic() {
//     //let dizi=[1,2,3];  //okunabilirliği, hız açısından iyidir.
//     let dizi = new Array(1, 2, 3);
//     return dizi;
// }

// function diziVeriAl(temp) {
//     console.log(temp)
// }

// //monad yapısı - fonksiyon içinde fonksiyon çağrılması
// diziVeriAl(diziBaslangic());


// ////////////////////////////////////
// //data
// let dateTutorials = () => {
//     let tarih = new Date();

//     //get
//     console.log(tarih.getHours())
//         //console.log(tarih.getFullYear());

//     //set
//     console.log(new Date("2015-1-1"));
// }
// dateTutorials();

// let dateShow = () => {
//         // let tarih = new Date();
//         // let saat=tarih.getHours()

//         console.log(new Date().getHours())
//         let ternary = (new Date().getHours() >= 20) ? "az kaldı" : "çok zaman var";
//         console.log(ternary);
//     }
//     //dateShow();

///////////////////////////////////
//Object: bir varlığın özelliklerinin toplamıdır.
//object camelCase
//literal Object(Arrow Function)
// let object = () => {

//         let array1 = new Array();
//         console.log(array1)

//         console.log("++++++++++++++++++++++++++++")

//         let obj1 = new Object();
//         console.log(obj1)
//     }
//object();

// let object2 = () => {
//     let person = {};

//     //değerler vermek istiyorum
//     person.firstName = "Hamit";
//     person.job = "Computer Engineer";
//     person.middleName = "Göbek Adı";

//     console.log(person);
// }
// object2();

//+++++++++++++++++++++++++
// let object2=()=>{
//     let person={};
//     //değerler vermek istiyorum
//     person.firstName="Hamit";
//     person.job="Computer Engineer";
//     person.middleName="Göbek Adı";

//     console.log(person.middleName.toUpperCase());
// }
// object2();

//+++++++++++++++++++++++++
//Object yeni attribures eklemek
// let object2 = () => {
//     let person = {
//         firstName: "Hamit",
//         job: "Computer Engineer",
//         middleName: "Göbek Adı"
//     };
//     person.lastName = "Mızrak";
//     console.log(person.middleName.toUpperCase());
//     person.middleName = "İkinci ismi değişti";
//     console.log(person);
// }
// object2();

//++++++++++++++++++++++++++
//object function
// let object2 = () => {
//     let person = {
//         firstName: "Hamit",
//         job: "Computer Engineer",
//         middleName: "Göbek Adı"
//         hesaplama: function(sayi1, sayi2) {
//             return sayi1 + sayi2;
//         }
//     };

//     console.log(person.hesaplama(10, 20));
// }
// object2();


//Nested Object: Obje içinde Object
// let object2 = () => {
//     let person = {
//         firstName: "Hamit",
//         job: "Computer Engineer",
//         middleName: "Göbek Adı"
//         hesaplama: function(sayi1, sayi2) {
//             return sayi1 + sayi2;
//         }
//         damar: {
//             damarAdi: "Toplar Damar",
//             damarTuru: "damar turu 4521"
//         }
//     };
//     console.log(person)
//     console.log(person.damar.damarAdi.endsWith("r"));
// }
// object2();


// let object2 = () => {
//     let person = {
//         firstName: "Hamit",
//         job: "Computer Engineer",
//         middleName: "Göbek Adı"
//         hesaplama: function(sayi1, sayi2) {
//             return sayi1 + sayi2;
//         }
//         damar: {
//             damarAdi: "Toplar Damar",
//             damarTuru: "damar turu 4521"
//         }
//     };
//     console.log(person)
//     console.log(person["damar"]["damarAdi"]);
// }
// object2();


////////////////////////////

// let object2 = () => {
//     let person = {
//         firstName: "Hamit",
//         job: "Computer Engineer",
//         middleName: "Göbek Adı"
//         hesaplama: function(sayi1, sayi2) {
//             return sayi1 + sayi2;
//         }
//         damar: {
//             damarAdi: "Toplar Damar",
//             damarTuru: "damar turu 4521"
//         },
//         diller: ["Javascript", "Java", "c#", "Python"],
//         dillerOzellikler: {
//             roles: "asd"
//         }
//     };
//     console.log(person)
//     console.log(person["damar"]["damarAdi"]);
//     console.log(person.diller[0])
// }
// object2();

////////////////////////////////////////
// let teplateLiteralTutorials = () => {
//     let normalString = "Merhabalar çift tırnak";
//     console.log(normalString);

//     let normalString2 = 'Merhabalar çift tırnak';
//     console.log(normalString2);

//     //ES6
//     let templateString = ´Merhaba backtick´;
//     console.log(templateString);
// }
// templateLiteralTutorials();


//////////////////////////////////////
// let teplateLiteralTutorials = () => {
//     let normalString = "Merhabalar çift tırnak";
//     console.log(normalString);

//     let normalString2 = 'Merhabalar çift tırnak';
//     console.log(normalString2);

//     //ES6
//     let templateString = ´Merhaba backtick´;
//     console.log(templateString);
// }
// templateLiteralTutorials();



///////////////////////////////////////



//2-)
//interpolation: değişken çağırmak için ==> ´´
let templateLiteralInterpolation = () => {
        let adi = "Hamit",
            soyadi = "Mızrak";
        console.log("Adı: " + adi + " soyadı: " + soyadi);
        //console.log(´Adı: $ { adi }
        // Soyadı: $ { soyadi }´);
    }
    //templateLiteralInterpolation();

//3-)
//Html Template
let templateLiteralHtmlTemplate = () => {
    const adi = "Hamit",
        soyadi = "Mızrak";

    // const htmlShow =
    //     "<ul>" +
    //     "<li>" + adi + "</li>"
    // "<li>" + soyadi + "</li>"
    // "</ul>";
    let html = ´ <
        ul >
        <
        li > $ { adi } < /li> <
    li > $ { soyadi } < /li> < /
        ul >

        ´;
    document.body.innerHTML = html;
}
templateLiteralHtmlTemplate();


///////////////////////////////////
//constructor