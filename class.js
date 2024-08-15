class Person {
    firstName = "Mahabub";
    lastName = "Alom";
    age = 22;
    isBangladeshi = true;
    city= "Mymenshingh";
    getName(){
        return `My Name is ${this.firstName} ${this.lastName}`
    }
}

let PersonObj = new Person();

console.log(
    PersonObj.age
)