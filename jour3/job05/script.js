const person  = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    city: undefined
}

introduction = (person) => {
    console.log("Je m'apelle " + person.firstName + " " + person.lastName +" j'ai " + person.age + " et j'habite a " + person.city)
}

const person1 = Object.create(person)
person1.firstName = "Corentin"
person1.lastName = "Roussel"
person1.age = "26"
person1.city = "Pélissanne"

introduction(person1);