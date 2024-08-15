// class Person {
//     constructor (num1, num2) {
//         let sum = num1 + num2;
//         console.log( sum)
//     }
// }
// let PresonObj = new Person (10, 100)

class Person {
    num1 = 10;
    num2 = 20;
constructor (a, b) {
    this.num1 = a;
    this.num2 = b
}
    addTwowNumber() {
        return this.num1 + this.num2
    }
}

let PersonObj = new Person(455, 55)
console.log(PersonObj.addTwowNumber())