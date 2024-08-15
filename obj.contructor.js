function person  () {
    this.firstName = "Mahabub";
    this.lastName = "Alom";
    this.age = 22;
    this.getName = function() {
        return `My Name is ${this.firstName} ${this.lastName}`;
    }
}

let PersonInstance = new person();

console.log(PersonInstance.getName()); 