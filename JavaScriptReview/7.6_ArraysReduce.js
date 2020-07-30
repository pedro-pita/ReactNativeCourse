const students = [
    {name: 'Pedro', note: 17.4, scholarship: false},
    {name: 'Henrique', note: 19.2, scholarship: true},
    {name: 'Mendes', note: 19.8, scholarship: false},
    {name: 'Pita', note: 18.7, scholarship: false}
];

const result = students.map(a=>a.note).reduce(function(increment, current){ //go through the array and pass the value to the next element
    console.log(increment,current);
    return increment + current;
}, 10); //10 is the initial 'increment' value

/*
ANOTHER EXAMPLE
*/

/************************************************** */
//All the students have scholarship?
const result2 = students.map(a=>a.scholarship).reduce(function(previous, current){ //go through the array and pass the value to the next element
    if(previous && current)
        return true;
    return false;
},true); //10 is the initial 'increment' value
console.log(result2);
//OR
const AllHaveScholarship = (previous,current) => previous && current;
console.log(students.map(a=>a.scholarship).reduce(AllHaveScholarship));

/*************************************************** */
//Any students have a scholarship?
const result3 = students.map(a=>a.scholarship).reduce(function(previous, current){ //go through the array and pass the value to the next element
    if(previous || current)
        return true;
    return false;
},true); //10 is the initial 'increment' value
console.log(result3);
//OR
const anyHaveScholarship = (previous,current) => previous || current;
console.log(students.map(a=>a.scholarship).reduce(anyHaveScholarship));

/**
 * HOW REDUCE WORKS BEHIND?? 
 */
Array.prototype.myReduce = function(callback){
    let incrementer = this[0]; //assigns the first value in array
    for(var i = 1; i < this.length; i++){ 
        incrementer = callback(incrementer,this[i]); //incremente the current value
    }
    return incrementer;
}
console.log(students.map(a=>a.scholarship).myReduce(anyHaveScholarship));