const mongose = require("mongoose");

const propertySchema = new mongose.Schema({
    houseNumber: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true, 
    },
    dateOfRegister: {
        type: String,
        required: true,
    },
    propertyType: {
        type: String,
        enum: ["Residential", "Commercial"],
        required: true,
    },
    areaInSqFt: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 150000,
    }, // Price in INR
    contactDetails: {
        phone: String,
        email: String,
    },
    isUnderMortgage: Boolean,
});

const Property = mongose.model("Property", propertySchema); //It is a model
module.exports = Property; // Exporting model