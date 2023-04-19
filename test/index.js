function createCounter() {
    let count = 0
    return function () {
       count = count +1
        return count
    }
}

const increment1 = createCounter()
const increment2 = createCounter()
const c1 = increment1()
const c2 = increment1()
const c3 = increment2()
const c4 = increment2()
console.log(c1, c2, c3, c4)