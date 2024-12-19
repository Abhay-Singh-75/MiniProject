 // Array to store form submissions
 const formDataArray = [];

 // Add event listener to the form
 document.querySelector('form').addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent default form submission behavior

     // Get form values
     const houseNumber = document.getElementById('houseNumber').value;
     const ownerName = document.getElementById('ownerName').value;
     const location = document.getElementById('location').value;
     const registrationDate = document.getElementById('registrationDate').value;

     // Create an object with form data
     const formData = {
         houseNumber: houseNumber,
         ownerName: ownerName,
         location: location,
         registrationDate: registrationDate
     };

     // Push the data to the array
     formDataArray.push(formData);

     // Display the array in console
     console.log("Form Data Array:", formDataArray);

     // Optional: Alert the user or reset the form
     alert("Form submitted successfully!");
     document.querySelector('form').reset();
 });