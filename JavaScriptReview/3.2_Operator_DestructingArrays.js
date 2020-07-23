// new resource ES2015
const array = [10,2,3,7,8,9]

const [i] = array; //create an const a and assign value from the array[0], in this case is 10
console.log(i); 

const [a,b, , d, , f, g, h = null] = array; //the space make an jump to next index, so... a=array[0], b=array[1], d=array[3],f=array[6], g will be undefined, h will be null
console.log(a,b,d,f,g);

const array_b = [[2,45,65],[6,9,2]]; 

const [, [,a_element]] = array_b; //jump the first array, jump the first element from second array, and create const a_element whith the value from second elemente second array
console.log(a_element);