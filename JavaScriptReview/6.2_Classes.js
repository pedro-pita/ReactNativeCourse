class Grandfather{
    constructor(surname){
        this.surname = surname;
    }
}

class Dad extends Grandfather{
    constructor(surname, profession="Programmer"){
        super(surname);
        this.profession = profession;
    }
}

class Son extends Dad{
    constructor(){
        super('Pita');
    }
}

const son = new Son;
console.log(son);