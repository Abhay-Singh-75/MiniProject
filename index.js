// require mongoose 
const mongoose = require("mongoose");
const Property = require("./models/property");
// require express
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
// app.use(express.static(path.join(__dirname, "public/CSS")));
app.use(express.static("public"));


// connecting MongoDb with the DB
main()
    .then(() => {
        console.log("Connnection successful with the DB");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Property');
}
//  done with the connection  with DB

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/form", (req,res) => {
        res.render("form");
});

app.post("/check", async (req,res) => {
    const {houseNumber, ownerName, location, dateOfRegistration } = req.body;
    // console.log(typeof(houseNumber));
    // console.log(typeof(ownerName));
    // console.log(typeof(location));
    // console.log(dateOfRegistration);

    let checkData = await Property.findOne({
        houseNumber: houseNumber,
        ownerName: ownerName,
        location: location,
        dateOfRegister: dateOfRegistration,
    });
    
    if(checkData){
        console.log("Data found: ", checkData);
        res.json({ 
            success: true, 
            message: "Property found in the database!", 
            data: checkData 
        });
    }else{
        console.log("Data not found.");
        res.json({ success: false, message: "Property not found in the database." });
    }
    // res.render("index");
})



