const realEstateDataIndia = [
  {
    houseNumber: "A-101",
    ownerName: "Rajesh Kumar",
    location: "123 MG Road, Bengaluru, Karnataka",
    country: "India",
    dateOfRegister: "15-06-2022",
    propertyType: "Residential",
    areaInSqFt: 2000,
    price: 7500000, // Price in INR
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-9876543210",
      email: "rajesh.kumar@example.com"
    }
  },
  {
    houseNumber: "B-202",
    ownerName: "Anjali Mehta",
    location: "45 Park Street, Kolkata, West Bengal",
    country: "India",
    dateOfRegister: "10-01-2023",
    propertyType: "Commercial",
    areaInSqFt: 3500,
    price: 12000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-9123456789",
      email: "anjali.mehta@example.com"
    }
  },
  {
    houseNumber: "C-303",
    ownerName: "Vikram Singh",
    location: "678 Lajpat Nagar, New Delhi",
    country: "India",
    dateOfRegister: "05-09-2021",
    propertyType: "Residential",
    areaInSqFt: 1500,
    price: 6000000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-7890123456",
      email: "vikram.singh@example.in"
    }
  },
  {
    houseNumber: "D-404",
    ownerName: "Priya Nair",
    location: "15 Marine Drive, Mumbai, Maharashtra",
    country: "India",
    dateOfRegister: "25-03-2023",
    propertyType: "Commercial",
    areaInSqFt: 4000,
    price: 25000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-8901234567",
      email: "priya.nair@example.in"
    }
  },
  {
    houseNumber: "E-505",
    ownerName: "Arun Sharma",
    location: "9 Anna Nagar, Chennai, Tamil Nadu",
    country: "India",
    dateOfRegister: "20-11-2020",
    propertyType: "Residential",
    areaInSqFt: 1800,
    price: 8000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-6789012345",
      email: "arun.sharma@example.com"
    }
  },
  {
    houseNumber: "F-606",
    ownerName: "Sunita Patel",
    location: "42 Sector 18, Noida, Uttar Pradesh",
    country: "India",
    dateOfRegister: "18-12-2005",
    propertyType: "Residential",
    areaInSqFt: 2500,
    price: 9000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-9871234560",
      email: "sunita.patel@example.com"
    }
  },
  {
    houseNumber: "G-707",
    ownerName: "Rohan Desai",
    location: "78 FC Road, Pune, Maharashtra",
    country: "India",
    dateOfRegister: "18-02-2016",
    propertyType: "Commercial",
    areaInSqFt: 3200,
    price: 15000000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-9123412789",
      email: "rohan.desai@example.com"
    }
  },
  {
    houseNumber: "H-808",
    ownerName: "Shweta Arora",
    location: "12 Civil Lines, Jaipur, Rajasthan",
    country: "India",
    dateOfRegister: "21-08-1990",
    propertyType: "Residential",
    areaInSqFt: 1800,
    price: 7500000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-8901245611",
      email: "shweta.arora@example.com"
    }
  },
  {
    houseNumber: "I-909",
    ownerName: "Amitabh Sinha",
    location: "55 Salt Lake City, Kolkata, West Bengal",
    country: "India",
    dateOfRegister: "18-02-2001",
    propertyType: "Residential",
    areaInSqFt: 2400,
    price: 8500000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-7890123487",
      email: "amitabh.sinha@example.com"
    }
  },
  {
    houseNumber: "J-1010",
    ownerName: "Manisha Gupta",
    location: "30 Ashok Nagar, Kanpur, Uttar Pradesh",
    country: "India",
    dateOfRegister: "20-12-2020",
    propertyType: "Commercial",
    areaInSqFt: 3000,
    price: 18000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-8912345670",
      email: "manisha.gupta@example.in"
    }
  },
  {
    houseNumber: "K-1111",
    ownerName: "Prakash Yadav",
    location: "101 Gachibowli, Hyderabad, Telangana",
    country: "India",
    dateOfRegister: "12-12-2012",
    propertyType: "Residential",
    areaInSqFt: 2200,
    price: 9500000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-6789012349",
      email: "prakash.yadav@example.in"
    }
  },
  {
    houseNumber: "L-1212",
    ownerName: "Kavita Menon",
    location: "33 MG Road, Ernakulam, Kerala",
    country: "India",
    dateOfRegister: "21-05-2004",
    propertyType: "Residential",
    areaInSqFt: 2700,
    price: 11000000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-9876543120",
      email: "kavita.menon@example.com"
    }
  },
  {
    houseNumber: "M-1313",
    ownerName: "Deepak Mishra",
    location: "88 Lal Ghat, Varanasi, Uttar Pradesh",
    country: "India",
    dateOfRegister: "24-09-2008",
    propertyType: "Commercial",
    areaInSqFt: 3200,
    price: 17000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-9123409876",
      email: "deepak.mishra@example.in"
    }
  },
  {
    houseNumber: "N-1414",
    ownerName: "Neha Kapoor",
    location: "22 R K Puram, New Delhi",
    country: "India",
    dateOfRegister: "14-06-2010",
    propertyType: "Residential",
    areaInSqFt: 1500,
    price: 6800000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-9012345678",
      email: "neha.kapoor@example.in"
    }
  },
  {
    houseNumber: "O-1515",
    ownerName: "Anil Roy",
    location: "60 Fort Road, Bengaluru, Karnataka",
    country: "India",
    dateOfRegister: "13-04-2022",
    propertyType: "Residential",
    areaInSqFt: 2000,
    price: 8700000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-6789123456",
      email: "anil.roy@example.com"
    }
  },
  {
    houseNumber: "P-1616",
    ownerName: "Sarita Khurana",
    location: "90 Gomti Nagar, Lucknow, Uttar Pradesh",
    country: "India",
    dateOfRegister: "30-11-2020",
    propertyType: "Commercial",
    areaInSqFt: 2500,
    price: 13000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-8901234567",
      email: "sarita.khurana@example.in"
    }
  },
  {
    houseNumber: "Q-1717",
    ownerName: "Rahul Saxena",
    location: "12 Ganga Vihar, Haridwar, Uttarakhand",
    country: "India",
    dateOfRegister: "18-07-2019",
    propertyType: "Residential",
    areaInSqFt: 1600,
    price: 5600000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-7890123457",
      email: "rahul.saxena@example.com"
    }
  },
  {
    houseNumber: "R-1818",
    ownerName: "Maya Pillai",
    location: "44 Panampilly Nagar, Kochi, Kerala",
    country: "India",
    dateOfRegister: "15-02-2021",
    propertyType: "Residential",
    areaInSqFt: 2100,
    price: 7200000,
    isUnderMortgage: true,
    contactDetails: {
      phone: "+91-8912345098",
      email: "maya.pillai@example.in"
    }
  },
  {
    houseNumber: "S-1919",
    ownerName: "Vivek Jain",
    location: "101 Model Town, Ludhiana, Punjab",
    country: "India",
    dateOfRegister: "20-10-2006",
    propertyType: "Commercial",
    areaInSqFt: 4000,
    price: 20000000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-6789109876",
      email: "vivek.jain@example.in"
    }
  },
  {
    houseNumber: "T-2020",
    ownerName: "Ruchi Thakur",
    location: "55 Rajinder Nagar, Shimla, Himachal Pradesh",
    country: "India",
    dateOfRegister: "21-04-2015",
    propertyType: "Residential",
    areaInSqFt: 1900,
    price: 6700000,
    isUnderMortgage: false,
    contactDetails: {
      phone: "+91-9876543234",
      email: "ruchi.thakur@example.com"
    }
  },
];

module.exports = {property : realEstateDataIndia};
// Exporting data from this file to init.js



  

