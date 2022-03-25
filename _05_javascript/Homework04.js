/****************************************************
//Object CV 
//adi
//soyadi
//yas
//diller[]
//meslek{}
//emeklilik=function(age){return 2022-age} ==> yaş<18 yaş>=150 (validation)
//String toUppercase

*****************************************************/

let objectCv = () => {
    let cv = {
        personal: {
            firstName: prompt('İsim: '),
            lastName: prompt('Soyisim: '),
            age: Number(prompt('Yaş: ')),
            number: Number(prompt('Cep Numarası: ')),
            ePosta: prompt('E-posta adresi: '),
            city: prompt('Yaşadığınız şehir: ')
        },
        // languages: function(dizi){
        //     for(let temp of dizi){
        //         let lang=dizi[temp]
        //     }
        job: prompt('meslek: '),
        education: function() {
            let degree;
            let selection = Number(prompt('Eğitim bilgisi için rakam girin: Lise-1 Üniversite-2 Yüksek Lisans-3'));
            switch (selection) {
                case 1:
                    degree = 'Lise'
                    break
                case 2:
                    degree = 'Üniversite'
                    break
                case 3:
                    degree = 'Yüksek Lisans'
                    break
                default:
                    console.log('Yanlış rakam girdiniz.')
                    break
            }
            return degree
        },
        experience: Number(prompt('Kaç yıl iş deneyiminiz var? '))
            //      retirement:  
    }
    console.log(cv.education);
}
objectCv();