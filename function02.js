/**
 * Cho day so 0->100;
 * Viet 1 function:
 *  - In ra day so chia het cho 2
 *  - In ra day so ko chia het cho 2
 *  - In ra day so chia cho 5 du 4: 4 9 14 ...
 */

function inSoChan(){
    let data = '';
    for(let i=0; i<=100; i++){
        if(i%2==0){
            data += i+' ';
        }
    }
    return data;
}
function inSoLe(){
    let data = '';
    for(let i=0; i<=100; i++){
        if(i%2==1){
            data += i+' ';
        }
    }
    return data;
}

function inSoChia5Du4(){
    let data = '';
    for(let i=0; i<=100; i++){
        if(i%5==4){
            data += i+' ';
        }
    }
    return data;
}

// console.log(inSoChia5Du4());
/**
 * 
 * @param {function} fn 
 */
function printNumber(fn){
    let data = '';
    for(let i=0; i<=100; i++){
        let dk = fn(i)
        if(dk){
            data += i+' ';
        }
    }
    return data;
}
function kiemTraSoChan(n){
    return n%2==0;
}
function kiemTraSoLe(n){
    return n%2!==0;
}
function kiemTraSoChia5Du4(n){
    return n%5==4;
}

let a = printNumber(kiemTraSoChia5Du4)
console.log(a);