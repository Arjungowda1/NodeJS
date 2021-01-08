const assert = require("assert");

exports.insertDocument = (db, document, collection, callback) =>{
    const collections =  db.collection(collection);
    collections.insert(document, (err, result)=>{
        assert.equal(err, null);

        console.log(result.result.n+" Documents added to the collection" );
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) =>{
    const collections =  db.collection(collection);

    collections.find({}).toArray((err, docs) =>{
        assert.equal(err,null);

        callback(docs);
    });
};

exports.removeDocument = (db, document, collection, callback) =>{
    const collections =  db.collection(collection);
    collections.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log("Removed the document", document);
        callback(result);
    });
};

exports.updateDocument = (db, document, update, collection, callback) =>{
    const collections =  db.collection(collection);
    collections.updateOne(document, { $set: update }, null, (err, result) =>{
        assert.equal(err,null);
        console.log("Updated the document with", update);
        callback(result);
    });
};