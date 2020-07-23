// new resource ES2015
function rand({min = 0, max = 1000}){ //recevie an object and extract min and max atrribute from object
    return Math.floor(Math.random() *(max - min) + min);
}

const obj = {max: 50, min: 40};
console.log(rand(obj));
console.log(rand({min:955}));
console.log(rand({}));
//console.log(rand());//ERRO!