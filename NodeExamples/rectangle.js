module.exports = (x, y, callback) => {
    if(x<=0 || y<=0){
        setTimeout(() => callback(new Error("Enter values other than zero"),null),2000);
    }
    else{
        setTimeout(() => callback(null,{
            area: (l,b) => (l*b),
            perimeter: (l,b) => (2*(l+b))
        }),2000);
    }
};