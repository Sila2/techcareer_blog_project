/****************************************************
//S.O.L.I.D
//Design Pattern
//UML Diyagram nedir ? 
//Heap memory,Stack memory
*****************************************************/


/****************************************************
//Örnek: 1. dereceden 2 bilinmeyenli denklem
//Kullanıcıdan aldığımız 2 değişkeni hesaplatalım?
//y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılacaktır. (Arrow function)
*****************************************************/

let equationWithUnKnow = () => {
        console.log("deneme")
        let number1, number2, result;
        number1 = Number(prompt("1.sayı"));
        number2 = Number(prompt("2.sayı"));
        result = 3 * number1 + 5 * number2;
        console.log(result)
    }
    //equationWithUnKnow();



/****************************************************
//Örnek: 2. dereceyi fahrenhaya çeviren function (Anonymous function)
//Formül: (dereceSayi * 9 / 5) + 32;

*****************************************************/

let toFahrenhayt = function() {
        let degree, result;
        degree = Number(prompt("Lütfen dereceyi giriniz"));
        result = (degree * 9 / 5) + 32;
        console.log(result)
    }
    // toFahrenhayt();


/****************************************************
//Örnek: 1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç
// continue

*****************************************************/

let totalfiveExcluded = () => {
    let sum = 0; //başlangıç bir değer: sıfır etkisiz toplama
    for (let i = 1; i <= 10; i = i + 1) {
        if (i % 5 === 0)
            continue;
        sum += i;
    }
    console.log("toplam: " + sum)
}

totalfiveExcluded();



/****************************************************
//Örnek: 1-99 sayılar dahil 1<=<x<=99 bu sayılardan içerde kaç tane tek sayı kaç tane çift sayı vardır ?

*****************************************************/

let evenOdd = () => {

    let even = 0,
        odd = 0;
    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log("1-99 arasında " + even + " çift, " + odd + " tek sayı vardır.")
}
evenOdd();



/****************************************************
//Örnek: 2 Dereceyi fahrenhaya çeviren function (Anonymous function)
//Kullanıcıdan alınan dereceyi Fahrenhata çeviren function (Arrow Function)
//Formül: (dereceSayi * 9 / 5) + 32;

*****************************************************/


/****************************************************
//Örnek: 3 Dört işlem
//4+3*2(3:3-1*6+9:1+(3:3)) 

*****************************************************/


/****************************************************
//Örnek: 4 password-repassword function (Normal Function) ternary

*****************************************************/


/****************************************************
//Örnek: 5 Kullanıcının Girdiği Sayının Negatif mi, Pozitif mi Olduğunu Bulan function(anonymous)

*****************************************************/




/****************************************************
//Örnek: Kullanıcıdan alınan sayıya göre random sayılar oluştursun
// 0-) ilk ve son sayının toplamı ?
// 1-) Toplamları
// 2-) Ortalaması
// 3-) Tek sayı toplamları
// 4-) Kaç tane Tek sayı 
// 5-) çift sayı toplamları
// 6-) çift tane Tek sayı 


*****************************************************/


/****************************************************
//Örnek: Kullanıcının Girdiği Sayının Faktöriyel hesaplama


*****************************************************/

/****************************************************
//Örnek: Kullanıdan aldığımız kelimeyi tersine çeviren program
//exam: bardak  ==> kadrab


*****************************************************/

/****************************************************
//Örnek: kullanıcı tarafından başlangıç,bitiş sayıları ve bir döngüde devam etsin.
// s1-)  başlangıç,bitiş sayıların toplamı
// s2-)  başlangıç,bitiş çift  sayıların toplamı
// s2-)  başlangıç,bitiş  kadar teksayılar  sayıların toplamı
// s3-)  başlangıç,bitiş sayıların toplamı ancak 5'e bölünebilen sayılar hariç


*****************************************************/

///////////////////////////////////////////////////////
//debug nedir ?
//debug nasıl atılır ?