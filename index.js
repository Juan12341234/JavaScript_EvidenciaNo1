// CALLBACKS

// const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
// const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];



// function encontrado() {
//     setTimeout(() => {
//         console.log("País encontrado");
//     }, 1000)
// };

// function busquedaDatos1(pais, callback) {
//     if(baseDatos1.includes(pais)) {
//         callback();
//     }else{
//         busquedaDatos2(pais, callback);
//     }
// };

// function busquedaDatos2(pais, callback){
//     if(baseDatos2.includes(pais)){
//         callback();
//     }else{
//         console.log('Dato no encontrado.');
//     }
// };

// busquedaDatos1('Corea del Sur', encontrado);

// PROMESAS
// const vocales=['a','e','i','o','u','A','E','I','O','U'];

// function letraFinal(palabra) {
//         return new Promise((resolve, reject) => {
//             let ultimaLetra=palabra.charAt(palabra.length-1);
//             if(vocales.includes(ultimaLetra)){
//                 resolve(`La vocal es: ${ultimaLetra}`);
//             }else{
//                 reject(`${ultimaLetra} no es vocal.`);
//             }
//         });
// };

// letraFinal('Amiga Mic')
// .then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// });
