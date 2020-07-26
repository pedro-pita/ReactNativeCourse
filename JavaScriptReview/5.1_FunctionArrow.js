let double = function(a){
    return 2 * a;
};
//OR
double = (a) =>{ return 2 * a} ;
//OR
double = (a) => 2*a ; //reduced writing and is an anonymous function
console.log(double(2)); //call function and print resulte

let hey = () => 'Hey'; //another example without parameters using arrow function
console.log(hey());

function Person(){
    this.age = 0;
    setInterval(() =>{ //this does not vary
        this.age++;
        console.log(this.age)
    },1000);
}
new Person
