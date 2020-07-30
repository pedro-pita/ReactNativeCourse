const pilots = ['Vettel','Alonso','Raikkonen','Massa'];

/*
*1-REMOVE THE LAST ELEMENT
*/
pilots.pop();
console.log("pop:",pilots);
/*
*2-ADD NEW ELEMENT AT THE END
*/
pilots.push('Verstappen');
console.log("push:",pilots);
/*
*3-REMOVE FIRST ELEMENT
*/
pilots.shift();
console.log("shift:",pilots);
/*
*4-ADD NEW ELEMENT AT THE BEGIN
*/
pilots.unshift('Hamilton');
console.log("unshift:",pilots);
/*
*5-ADD OR REMOVER ELEMENTS
*/
pilots.splice(2,0,'Bottas'); //add 'Bottas' before the second element
console.log("splice 1:",pilots);
pilots.splice(3,1); //remove 1 element starting in element 3
console.log("splice 2:",pilots);
pilots.splice(3,2,'Pedro','Henrique'); //remove 2 element starting in element 3, and add 2 elements starting in element 3
console.log("splice 3:",pilots);
/*
*6-SEPARATE SOME ARRAY ELEMENTS AND CREATE  NEW ARRAY
*/
const somePilots = pilots.slice(2); //from index 2 until the end
console.log("slice 1:",pilots, somePilots);
const somePilots2 = pilots.slice(2,4); //from index 2 up to 4
console.log("slice 2:",pilots, somePilots2);