class Person {
    num1 = 10;
    num2  =  20;
    addTowNum(){
        return this.num1 +  this.num2
    }
}

// Anothr way to  define a class is by using a class expression 
let Person = class {
    num1 = 100;
    num2  =  190;
    addTowNum(){
        return this.num1 +  this.num2
    }
}