//In JavaScript the array is an object that instead of organizing data based on identifiers, organizes data using an indexed structure ([0],[1])
console.log(typeof new Array, typeof []); //print object

let proved = new Array('Pedro','Henrique','Pita');
//OR
proved = ['Pedro','Henrique','Pita'];

console.log(proved[0]); //print element
proved[0] = 'Mendes'; //change element
console.log(proved[0]);
proved.push('Hello'); //add an element in the last array index
console.log(proved);
console.log(proved.length); //print array length

console.log(proved.sort()); //order alphabetically the elmentes
delete proved[1]; //make proved in index 1 undefined
console.log(proved[1]);

proved = ['Pedro','Henrique','Pita'];
proved.splice(1,2); //remove 2 elements starting in element 1; Result: [ 'Pedro' ]
proved.splice(1,2,"New Element 1","New Element 2"); //remove 2 elements starting in element 1, and add 2 new elements; Result: [ 'Pedro', 'New Element 1', 'New Element 2' ]
proved = ['Pedro','Henrique','Pita'];
proved.splice(1,0,"New Element 1","New Element 2"); //add 2 new elements, starting in element 1; Result: [ 'Pedro', 'New Element 1', 'New Element 2', 'Henrique', 'Pita' ]
console.log(proved);