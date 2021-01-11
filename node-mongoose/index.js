const mongoose = require("mongoose");

const Dishes = require('./models/dishes');

const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) =>{
    console.log("connected to the database");
    
    Dishes.create({
        name: "Vadonut",
        description: "Lorem ipsum dolor",
    })
    .then((dish) => {
        console.log(dish)

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: { description: 'Updated test'}
        },{
            new: true
            // returns the dish
        }).exec();
    })
    .then((dishes) => {
        console.log(dishes);

        dishes.comments.push({
            rating: 5,
            comment: "Lorem ipsum dipsum",
            author: "Mr. Pool"
        });

        return dishes.save();
    })
    .then((dish) =>{
        console.log(dish);
        return Dishes.remove({});
    })
    .then(() => {
        console.log("Empty")
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});