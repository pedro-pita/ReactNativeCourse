const products = [
    {name:'Notebook',price:2499,isFragile:true},
    {name:'iPad Pro',price:4199,isFragile:true},
    {name:'Cover',price:12.49,isFragile:false},
    {name:'Carger',price:18.99,isFragile:true}
];

console.log(products.filter(function(p){
    return false; //false dont will pertence to the final array
    //return true; //will pertence to the final array
}));

const expensive = product => product.price >= 500;
const isFragile = product => product.isFragile;
console.log(products.filter(expensive).filter(isFragile));//print all expensive and fragile products

/*
HOW FILTER WORKS BEHIND??
*/

Array.prototype.myFilter = function(callback){
    const arrayR = [];
    for(var i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
            arrayR.push(this[i]);
        }
    }
    return arrayR;
};

console.log(products.myFilter(expensive).myFilter(isFragile));//print all expensive and fragile products

