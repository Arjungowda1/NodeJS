var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle for l as "+l+" and b as " +b);

        rect(l,b, (err, rectangle) =>{
            if(err){
                console.log("ERROR "+ err.message);
                console.log(" ");
            }
                
            else{
                console.log("Perimeter for rectangle for l as "+l+" and b as " +b +" is " + rectangle.perimeter(l,b));
                console.log("Area for rectangle for l as "+l+" and b as " +b +" is " + rectangle.area(l,b));
                console.log(" ");
            }
        });
        
        console.log("This is after call to rect()");
        console.log(" ");
}

solveRect(2,3);
solveRect(-23,4);
solveRect(5,4);