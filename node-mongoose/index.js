const mongoose = require("mongoose");

const Dishes = require('./models/dishes');

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) =>{
    console.log("connected to the database");
    
    var newDish = Dishes({
        name: "Vadonut",
        description: "Lorem ipsum dolor"
    });

    newDish.save()
        .then((dish) =>{
            console.log(dish)

            return Dishes.find({}).exec();
        })
        .then((dishes) =>{
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() =>{
            console.log("Empty")
            return mongoose.connection.close();
        })
        .catch((err) => {
           console.log(err);
        });
});