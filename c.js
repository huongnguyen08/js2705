//find, findIndex, map, forEach, filter, fill, sort, reduce
// let arr = ['Nodejs', 'PHP', 'Android', 'iOS', 'PHP'];
// arr.sort().reverse()
// console.log(arr);

let arrNumber = [ 1, 4 ];
const total = arrNumber.reduce((prev, current)=>prev+current, 10);
console.log(total)

// arrNumber.sort((a,b)=>a<=b);
// console.log(arrNumber)


// arr.fill('Java',3,4);
// console.log(arr);


// let arrNumber = [ 1, 4, 3, 9, 81, 121, 34, 99, 144 ];
// let data = arrNumber.filter(element => Math.sqrt(element) === parseInt(Math.sqrt(element)))
// console.log(data)

// let data = arr.filter(element=>element==='PHP')
// console.log(data)



// arr.forEach((element, index)=>{
//     if(element=='PHP')
//     console.log(index, element)
// })


// let a = arr.map((element, index)=>{
//     if(element=='PHP') return [index, element];
//     return 1;
// })
// console.log(a)
// let index = arr.findIndex(element=>element==='Nodejs')
// if(index >= 0) console.log(index)
// else console.log('Not found!')


// let value = arr.find(element=>element==='PHP')
// if(value) console.log(value);
// else console.log('Not found!')