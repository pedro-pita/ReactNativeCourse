const nums = [1,2,3,4,5];

//make 2x all elements using map
let result = nums.map(function(e){
    return e * 2;
});
console.log(result);

const sum10 = e =>e + 10;
const tripple = e =>e * 3;
const toMoney = e => `${parseFloat(e).toFixed(2).replace('.',',')}€`;
result = nums.map(sum10).map(tripple).map(toMoney);
console.log(result); //Result: [ '33,00 €', '36,00 €', '39,00 €', '42,00 €', '45,00 €' ]


//Another example
const checkout = [
    '{ "name":"Rubber", "price": 3.45 }',
    '{ "name":"book", "price": 13.90 }',
    '{ "name":"pencil", "price": 8.22 }',
    '{ "name":"pen", "price": 7.50 }'
];
const toObject = json => JSON.parse(json); //array to object
const exPrice = product => product.price;
result = checkout.map(toObject).map(exPrice);
console.log(result);

/*
HOW MAP WORKS BEHIND??
*/

Array.prototype.myMap = function(callback){
    const arrayR = [];
    for(var i = 0; i < this.length; i++){
        arrayR.push(callback(this[i],i,this));
    }
    return arrayR;
}

result = checkout.myMap(toObject).myMap(exPrice);
console.log(result);
