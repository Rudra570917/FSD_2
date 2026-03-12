const person = [
{
    name: "PQR", age: 38
},
{
    name: "ABC", age: 35
},
{
    name: "XYZ", age: 47
}
];

let maxAgePerson = person[0];

for (let i = 1; i < person.length; i++) {
    if (person[i].age > maxAgePerson.age) {
        maxAgePerson = person[i];
    }
}

console.log("Name:", maxAgePerson.name);
console.log("Age:", maxAgePerson.age);