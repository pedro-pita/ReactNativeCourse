// new resource ES2015
function rand([min = 0, max = 1000]){ //recevie an array and extract min and max atrribute from array
    if(min > max) 
        [min, max] = [max,min];//min=max and max=min
    return Math.floor(Math.random() *(max - min) + min);
}

console.log(rand([40,50]));
console.log(rand([900]));
console.log(rand([900,100])); //max will be 900 and min 100
console.log(rand([]));
//console.log(rand());//ERRO!