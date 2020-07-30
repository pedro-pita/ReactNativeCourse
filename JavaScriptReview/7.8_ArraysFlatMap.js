const school = [{
    name:'Class M1',
    students:[{
        name:'Pedro',
        note: 18.1
    },{
        name:'Henrique',
        note: 16.1
    }]
}, {
    name:'Class M2',
    students:[{
        name:'Mendes',
        note: 19.1
    },{
        name:'Pita',
        note: 12.1
    }]
}];

const getNotesClass = class_ => class_.students.map(getNoteStudent);
console.log(school.map(getNoteStudent));

//create method flatMap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback));
}

const notes2 = school.flatMap(getNotesClass); //concat all notes on only one array
console.log(notes2);