const mongoose = require("mongoose");
const Property = require('../models/property.js'); // importing model with schema 
const propertyData = require("./initData.js"); // importing the data from initData.ja

main().then(() => {
    console.log("Connected with DB");
})
.catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Property");
}

const initDB = async () => {

    await Property.deleteMany({}).then(() => {
        // console.log("Data Deleted");
    }).catch((err) => {
        console.log(err);
    });


    await Property.insertMany(propertyData.property).then(() => {
        console.log("Data Insereted");
        
    }).catch((err) => {
        console.log(err);
    });

    
}

initDB();