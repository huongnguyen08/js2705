// function logData(){
//     console.log('Hello');
// }
// logData();


// /**
//  * 
//  * @param {string} name 
//  */
// const logData = (name='Noname')=> 'Hello ' + name;
// let data = logData('Teo');
// // let data = logData();

// console.log(data)

// function log(){
//     return console.log;
// }
// log()(1234)

// function sum(a,b){
//     return a+b;
// }
// function tinhTong(){
//     return sum;
// }
// let t = tinhTong()(3,2)
// console.log(t)

// function log(fn){
//     return fn(1234);
// }
// log(console.log)

function tinhTong(fn){
    return fn(3,5);
}
const t = tinhTong((a,b)=>a-b)
console.log(t)

/**
 * Cho day so 0->100;
 * Viet 1 function:
 *  - In ra day so chia het cho 2
 *  - In ra day so ko chia het cho 2
 *  - In ra day so chia cho 5 du 4: 4 9 14 ...
 */