const sum = function(x,y){
    return x + y;
}

const printResult = function(a,b, operation=sum){
    console.log(operation(a,b))
}
printResult(2,6); //will print the sum 2+6=8

const sub = function(x,y){
    return x - y;
}
printResult(5,2, sub); //will print the sub 5-2=3
//OR
printResult(5,2, (x,y) => x-y); //using arrow function

//more complete example
let a = 6;
let b = 2;
printResult(a,b); //a+b because the default functions is sum(x,y)
printResult(a,b, (x,y) => x-y); //a-b
printResult(a,b, (x,y) => x*y); //a*b
printResult(a,b, (x,y) => x/y); //a/b