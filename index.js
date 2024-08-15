let person  =  {
    firstName : "Mahabub",
    lastName : "Alom",
    age: 22,
    getName : () => {
        return `My Name is ${person.firstName} ${person.lastName}`
    }
}
console.log(person.getName())