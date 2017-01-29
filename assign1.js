const myVal = process.argv

let myArr = []
myArr.push(5)
console.log(`myArr after push(5): ${myArr}`)
myArr.unshift(9)
myArr.push(3)
myArr.shift()
myArr.pop()
console.log(myArr)
