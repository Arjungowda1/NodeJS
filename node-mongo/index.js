const mongoClient = require("mongodb");
const assert = require("assert");
const dboper = require('./operations');

const url = "mongodb://localhost:27017/";
const dbname = 'conFusion';

mongoClient.connect(url, (err, client) =>{

    assert.equal(err,null);

    console.log("Connected to the database")
    const db = client.db(dbname);
    dboper.insertDocument(db, { name:"Vadonut", description:"lorem ipsum" }, 'dishes', (result) =>{

        console.log("Insert document:\n",result.ops);

        dboper.findDocuments(db, 'dishes', (docs) =>{
            console.log("Found documents:\n", docs);

            dboper.updateDocument(db, { name:"Vadonut" }, { description: "ipsum dipsum"}, 'dishes', (docs) =>{

                console.log("Document updated:\n",result.result);

                dboper.findDocuments(db, 'dishes', (docs) =>{
                    console.log("Found documents:\n", docs);
                    db.dropCollection('dishes', (result) =>{
                        console.log("dropped collection", result);

                        client.close();
                    });
                });
            });
        });
    });
});