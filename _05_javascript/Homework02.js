/****************************************************
//kullanıcını girdiği sayıya göre haftanın günleri gösteren algoritma ? (switch-case)
*****************************************************/

// function days() {
//     let sayi = Number(prompt('Lütfen seçmek istediğiniz güne karşılık gelen numarayı giriniz. (1-7)'))

//     switch (sayi) {
//         case 1:
//             console.log('Pazartesi')
//             break
//         case 2:
//             console.log('Salı')
//             break
//         case 3:
//             console.log('Çarşamba')
//             break
//         case 4:
//             console.log('Perşembe')
//             break
//         case 5:
//             console.log('Cuma')
//             break
//         case 6:
//             console.log('Cumartesi')
//             break
//         case 7:
//             console.log('Pazar')
//             break
//         default:
//             console.log('Girdiğiniz sayı 1-7 arasında değil.')
//             break20

//     }
// }
// days();



/****************************************************
//Vize Final Ödev: arrow function
//vize%40+final%60
//1-59   FF
//55-60  CC
//61-80  BB
//81-100 AA
*****************************************************/


let not = () => {
    let vize = Number(prompt('Vize notunuz:'))
    let final = Number(prompt('Final notunuz:'))
    let sonuc = (vize * 40 / 100) + (final * 60 / 100);
    let harf = sonuc < 59 ? 'FF' : (sonuc < 60 ? 'CC' : (sonuc < 80 ? 'BB' : (sonuc < 100 ? 'AA' : 'not yanlıs')));
    console.log(result)
}
not();
//










/****************************************************
//For ile while döngüsü arasındaki fark nedir ?
*****************************************************/

//For ve While döngüleri benzer işlevleri yerine getirebilir. While döngüsü belirtilen şart sağlanana kadar devam eder ve sağlandığında döngü sona erer. For döngüsü ise belirtilen sayı kadar döngüyü döndürür.



/****************************************************
//For ile while döngüsü arasındaki fark nedir ?
*****************************************************/


/****************************************************
//S.O.L.I.D
//Design Pattern
*****************************************************/


/****************************************************
//Örnek: 1. dereceden 2 bilinmeyenl, denklem
//Kullanıcıdan aldığımız 2 değişkeni hesapşatalım?
//y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılacaktır. (Arrow function)
*****************************************************/



/****************************************************
//Örnek: 2. dereceyi fahrenhaya çeviren function (Anonymous function)

*****************************************************/