// new resource ES2015

const person = {
    name:'Pita',
    age: 5,
    address: {
        street: 'ABC',
        door: 1000
    }
};

const {name,age} = person; //get 'name' and 'age' from object 'person' and create 'name' and 'age' an const
console.log(name, age);

const {name:n, age: a} = person; //make the same, but this time create const 'n' and asssign the value name, and the same for age
console.log(n,a);

const {surname = null,marital_status} = person; //try to get surname and marital_status from object, if dont exist surname will get the value "null" and marital_status will get "undefined"
console.log(surname, marital_status);

const {address:{street, door}} = person; //creat cont street and door
console.log(street,door);