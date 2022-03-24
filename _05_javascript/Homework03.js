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

// let totalfiveExcluded = () => {
//     let sum = 0; //başlangıç bir değer: sıfır etkisiz toplama
//     for (let i = 1; i <= 10; i = i + 1) {
//         if (i % 5 === 0)
//             continue;
//         sum += i;
//     }
//     console.log("toplam: " + sum)
// }

// totalfiveExcluded();



/****************************************************
//Örnek: 1-99 sayılar dahil 1<=<x<=99 bu sayılardan içerde kaç tane tek sayı kaç tane çift sayı vardır ?

*****************************************************/

// let evenOdd = () => {

//         let even = 0,
//             odd = 0;
//         for (let i = 1; i <= 99; i++) {
//             if (i % 2 === 0) {
//                 even++;
//             } else {
//                 odd++;
//             }
//         }
//         console.log("1-99 arasında " + even + " çift, " + odd + " tek sayı vardır.")
//     }
//evenOdd();


/****************************************************
//Örnek: Dört işlem
//4+3*2(3:3-1*6+9:1+(3:3)) 

*****************************************************/

// let operation = () => {
//     let result = (4 + 3 * 2(3 / 3 - 1 * 6 + 9 / 1 + (3 / 3)));
//     // result = Number(4 + 3 * 2(3 / 3 - 1 * 6 + 9 / 1 + (3 / 3)));
//     console.log(result)
// }
// operation();


/****************************************************
//Örnek: 4 password-repassword function (Normal Function) ternary

*****************************************************/

let passw = () => {
        // let password = [];
        // let repassword = [];
        // password = prompt("şifrenizi girin");
        // for (let i = 0; i < password.length; i++) {
        //     console.log("*")
        // }
        // repassword = prompt("şifrenizi tekrar girin");
        // repassword.match(password);

        let password = prompt("şifrenizi girin");
        let repassword;
        for (let i = 0; i < password.length; i++) {
            console.log("*")
        }
        repassword = prompt("şifrenizi tekrar girin");
        if (password == repassword) {
            console.log("şifre doğru")
        } else {
            console.log("şifre yanlış")
        }
    }
    //passw();

/****************************************************
//Örnek: 5 Kullanıcının Girdiği Sayının Negatif mi, Pozitif mi Olduğunu Bulan function(anonymous)

*****************************************************/

// let isNegative = () => {
//         let number = Number(prompt('Lütfen bir sayı giriniz'))
//         let result = number < 0 ? 'negatif' : 'pozitif'
//         console.log(result)
//     }
//isNegative();


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

// let rndNumber = () => {
//     //değişkenleri(variable)
//     let rndNumber, firstEndSum = 0,
//         sum = 0,
//         avrg = 0,
//         even = 0,
//         evenSum = 0;
//     odd = 0, oddSum = 0, number, array = [];
//     number = Number(prompt("Lütfen bir sayı giriniz"));
//     //döngüde rastgele sayı oluşturmak
//     for (let i = 0; i < number; i++) {
//         rndNumber = Number(Math.round(Math.random() * 9 + 1));
//         array[i] = rndNumber;
//         sum += rndNumber;
//         if (rndNumber % 2 == 0) {
//             even++;
//             evenSum += rndNumber;
//         } else {
//             odd++;
//             oddSum += rndNumber;
//         }
//     }
//     console.log(array)
//     firstEndSum = array[0] + array[array.length - 1];
//     avrg = sum / number;
//     console.log("ilk ve son sayının toplamı: " + firstEndSum);
//     console.log("Toplamları: " + Sum);
//     console.log("Ortalaması: " + avrg);
//     console.log("Tek sayı toplamları: " + oddSum);
//     console.log("Kaç tane Tek sayı: " + odd);
//     console.log("çift sayı toplamları: " + evenSum);
//     console.log("çift tane Tek sayı : " + even);
// }
// rndNumber();



/****************************************************
//Örnek: Kullanıcının Girdiği Sayının Faktöriyel hesaplama
*****************************************************/

let factorial = () => {
    let fact = 1,
        number;
    number = Number(prompt("Lütfen bir sayı giriniz"));
    if (number == 1) {
        console.log(number + "sayısının faktoriyeli: 1")
    } else {
        continue;
    }
    for (let i = 0; i < number; i++) {
        fact *= number;
    }
    console.log(number + "sayısının faktoriyeli: " + fact)

}
factorial();


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