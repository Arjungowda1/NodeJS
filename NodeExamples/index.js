var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle for l as "+l+" and b as " +b);

    if(l<=0 || b<=0){
        console.log("Enter values other than zero");
        console.log(" ")
    }
        
    
    else{
        console.log("Perimeter is "+ rect.perimeter(l,b));
        console.log("Area is "+ rect.area(l,b));
        console.log(" ")
    }
}

solveRect(2,3);
solveRect(-23,4);
solveRect(5,4);