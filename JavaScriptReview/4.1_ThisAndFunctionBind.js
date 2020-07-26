const person = {
    message: 'Hello!',
    speak(){
        console.log(this.message); //needs this to acess the atributte message
    }
}

//person.speak();
const speak = person.speak; //undefined
speak(); //undefined

const speakP = person.speak.bind(person); //the function bind make 'this' be always the object 'person'
speakP(); //print the message

function Person(){
    this.age = 20;
    const self = this;
    setInterval(function(){
        console.log(this.age); //will print Nan because "this" is not an reference from object Person
        console.log(self.age); //will print the age value
    },200);
    //}bind(this),200); //we use bind function to pass the correct object to the function an make "this.age" work fine
}

new Person