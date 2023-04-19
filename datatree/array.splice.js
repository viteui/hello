// let arr = new Array(10)
// arr[2] = 23
// arr.splice(0,1)
// console.log(arr)
// delete arr[5]
// delete arr[2]
// console.log(arr.length)

// arr = arr.filter(item => item !== undefined && item !== null && item !== '')
// console.log(arr)

let arr = [];
arr.length = 10
arr.forEach(element => {
 console.log(element)   
});

arr.filter(console.log);
console.log(JSON.parse(JSON.stringify(arr)))