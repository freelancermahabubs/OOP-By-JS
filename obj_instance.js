let person = new Object();
person.firstName = "Mahabub";
person.lastName = "Alom";
person.age = 22;
person.city = "Mymenshingh";
isBanladeshi = true;

person.getName = () => {
    return `My Name is ${person.firstName} ${person.lastName}`;
}
console.log(person)