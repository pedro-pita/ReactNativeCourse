const proved = ['Pedro','Henrique','Mendes','Pita'];

/*
Parameters
1-value
2-index
3-the array
*/
/*proved.forEach(function(name,index,array){ //traverses the array
    console.log(`${index+1}) ${name}`); //print the index and the element value
    console.log(array); 
});

proved.forEach(name=>console.log(name)); //print all array elements using arrow function

const printProved = proved => console.log(proved);
proved.forEach(printProved);*/

/*
HOW FOREACH WORKS BEHIND??
*/

Array.prototype.myForEach = function(callback){ //create my foreach example
    for(var i = 0; i < this.length; i++){
        callback(this[i],i,this);
    }
}

proved.myForEach(function(name, index, array){
    console.log(`${index+1}) ${name}`); //print the index and the element value
    console.log(array);
});