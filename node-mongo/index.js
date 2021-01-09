const mongoClient = require("mongodb");
const assert = require("assert");
const dboper = require('./operations');

const url = "mongodb://localhost:27017/";
const dbname = 'conFusion';

mongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then((client) =>{

    
    console.log("Connected to the database")
    const db = client.db(dbname);
    dboper.insertDocument(db, { name:"Vadonut", description:"lorem ipsum" }, 'dishes').then((result) =>{

        console.log("Insert document:\n",result.ops);
        return dboper.findDocuments(db, 'dishes')
    })
    .then((docs) =>{
        console.log("Found documents:\n", docs);
        return dboper.updateDocument(db, { name:"Vadonut" }, { description: "ipsum dipsum"}, 'dishes');
    })
    .then((result) =>{

        console.log("Document updated:\n",result.result);
        return dboper.findDocuments(db, 'dishes');
    })
    .then((docs) =>{
        console.log("Found documents:\n", docs);
        return db.dropCollection('dishes');
    })
    .then((result) =>{
        console.log("dropped collection", result);
        client.close();
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));