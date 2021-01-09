const assert = require("assert");

exports.insertDocument = (db, document, collection, callback) =>{
    const collections =  db.collection(collection);
    return collections.insert(document);
};

exports.findDocuments = (db, collection, callback) =>{
    const collections =  db.collection(collection);

    return collections.find({}).toArray();
};

exports.removeDocument = (db, document, collection, callback) =>{
    const collections =  db.collection(collection);
    return collections.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, callback) =>{
    const collections =  db.collection(collection);
    return collections.updateOne(document, { $set: update }, null);
};