const person = {
    name: 'andrew',
    age: 26,
    location: {
        city: 'Newyork',
        temp: 92
    }
};

//destruction
const {name, age} = person;
console.log(`${person.name} is ${person.age}`);

const { city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

//------------------Array destructuring--------------

const address = ['1299 S jupiter street', 'philadenphia', 'pennysilia', '19147'];

