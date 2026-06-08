const TYPES = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Commercial",
  "Luxury",
  "Land",
  "PG Hostel"
];

const LOCATIONS = [
  "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide",
  "Canberra", "Gold Coast", "Hobart", "Darwin",
  "New South Wales", "Victoria", "Queensland",
  "Western Australia", "South Australia",
  "Tasmania", "Northern Territory"
];

const imageMap = {
  Apartment: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  ],
  Villa: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800"
  ],
  Townhouse: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800"
  ],
  Commercial: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  ],
  Luxury: [
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
  ],
  Land: [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
  ],
  "PG Hostel": [
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800"
  ]
};

const properties = [];

for (let i = 1; i <= 150; i++) {
  const type = TYPES[i % TYPES.length];
  const location = LOCATIONS[i % LOCATIONS.length];
  const images = imageMap[type];

  // MODE
  let mode;
  if (type === "PG Hostel") mode = "rent";
  else mode = i % 2 === 0 ? "buy" : "rent";

  // PRICE
  let price;

  if (mode === "rent") {
    if (type === "PG Hostel") price = Math.floor(Math.random() * 600) + 200;
    else if (type === "Luxury") price = Math.floor(Math.random() * 2000) + 1200;
    else if (type === "Apartment") price = Math.floor(Math.random() * 900) + 350;
    else if (type === "Villa") price = Math.floor(Math.random() * 1500) + 600;
    else price = Math.floor(Math.random() * 1200) + 300;
  } else {
    if (type === "Luxury") price = Math.floor(Math.random() * 5000000) + 2500000;
    else if (type === "Villa") price = Math.floor(Math.random() * 3000000) + 900000;
    else if (type === "Townhouse") price = Math.floor(Math.random() * 2000000) + 500000;
    else if (type === "Apartment") price = Math.floor(Math.random() * 1500000) + 300000;
    else if (type === "Commercial") price = Math.floor(Math.random() * 4000000) + 1000000;
    else if (type === "Land") price = Math.floor(Math.random() * 3000000) + 200000;
    else price = Math.floor(Math.random() * 1200000) + 250000;
  }

  // ✅ BUILD PROPERTY INSIDE LOOP (FIXED)
  properties.push({
  id: i,
  title: `${type} Property ${i}`,
  type,
  location,

  image: images[0],
  images,

  price,
  mode,

  bedrooms: type === "Land" ? null : Math.floor(Math.random() * 5) + 1,
  bathrooms: type === "Land" ? null : Math.floor(Math.random() * 4) + 1,
  area:
    type === "Land"
      ? Math.floor(Math.random() * 8000) + 2000
      : Math.floor(Math.random() * 2000) + 500,

  yearBuilt: 1990 + (i % 35),

  // ✅ NEW STANDARD FILTER FIELD
  propertyAge: new Date().getFullYear() - (1990 + (i % 35)),

  condition: ["New", "Good", "Renovated", "Well Maintained"][i % 4],

  furnished:
    type === "Land"
      ? false
      : type === "PG Hostel"
      ? true
      : Math.random() > 0.5,

  // ✅ NEW STANDARD FILTER FIELD (for UI filtering)
  furnishing:
    type === "Land"
      ? null
      : type === "PG Hostel"
      ? "Fully Furnished"
      : Math.random() > 0.5
      ? "Furnished"
      : "Unfurnished",

  parking:
    type === "Land"
      ? 0
      : type === "PG Hostel"
      ? 0
      : type === "Apartment"
      ? 1 + (i % 2)
      : type === "Townhouse"
      ? 1 + (i % 2)
      : type === "Villa"
      ? 2 + (i % 2)
      : type === "Luxury"
      ? 3 + (i % 3)
      : type === "Commercial"
      ? 5 + (i % 10)
      : 0,
      propertyType: ["Office", "Shop", "Warehouse"][i % 3],
      soilType: ["Red Soil", "Black Soil", "Sandy", "Clay"][i % 4],
    description: `${type} property offering modern design, excellent connectivity, and premium lifestyle.`,

    // TYPE SPECIFIC
   propertyDetails:
  type === "Villa"
    ? {
        address: `${10 + i} Palm Street`,
        landArea: 2500 + i * 10,
        builtUpArea: 1800 + i * 8,
        balconies: (i % 3) + 1,
        floors: 2,
        privateGarden: i % 2 === 0,
        privatePool: i % 3 === 0,
        facingDirection: ["East", "West", "North", "South"][i % 4],
        security: true,
        powerBackup: true,
        nearbySchools: (i % 8) + 1,
        nearbyHospitals: (i % 5) + 1,
        metroConnectivity: ["Excellent", "Good", "Moderate"][i % 3],
        trafficCondition: ["Low", "Medium", "High"][i % 3],
        safetyScore: (i % 3) + 8,
        propertyDemand: ["High", "Medium"][i % 2],
        investmentPotential: ["High", "Excellent"][i % 2]
      }

    : type === "Apartment"
    ? {
        address: `${20 + i} Apartment Avenue`,
        floorNumber: (i % 20) + 1,
        builtUpArea: 800 + i * 5,
        balconies: (i % 2) + 1,
        totalFloors: 20,
        maintenanceFee: 150 + i,
        liftAvailable: true,
        gym: true,
        swimmingPool: i % 2 === 0,
        clubhouse: true,
        powerBackup: true,
        security: true,
        nearbySchools: (i % 8) + 1,
        nearbyHospitals: (i % 5) + 1,
        metroConnectivity: ["Excellent", "Good", "Moderate"][i % 3],
        trafficCondition: ["Low", "Medium", "High"][i % 3],
        safetyScore: (i % 3) + 8,
        propertyDemand: ["High", "Medium"][i % 2]
      }

    : type === "Luxury"
    ? {
        address: `${50 + i} Luxury Boulevard`,
        landArea: 5000 + i * 20,
        builtUpArea: 4000 + i * 15,
        privatePool: true,
        privateGym: true,
        homeTheater: true,
        smartHomeFeatures: true,
        privateGarden: true,
        parkingCapacity: 4 + (i % 4),
        rooftopTerrace: true,
        waterView: ["Sea View", "Lake View"][i % 2],
        securitySystem: true,
        nearbySchools: (i % 8) + 1,
        nearbyHospitals: (i % 5) + 1,
        metroConnectivity: "Excellent",
        safetyScore: 10,
        investmentPotential: "Excellent",
        luxuryRating: 5
      }

    : type === "Townhouse"
    ? {
        address: `${30 + i} Townhouse Lane`,
        builtUpArea: 1500 + i * 8,
        balconies: (i % 2) + 1,
        floors: 2,
        privateTerrace: i % 2 === 0,
        maintenanceFee: 100 + i,
        gatedCommunity: true,
        clubhouse: true,
        security: true,
        powerBackup: true,
        nearbySchools: (i % 8) + 1,
        nearbyHospitals: (i % 5) + 1,
        metroConnectivity: ["Excellent", "Good", "Moderate"][i % 3],
        trafficCondition: ["Low", "Medium", "High"][i % 3],
        safetyScore: (i % 3) + 8,
        propertyDemand: ["High", "Medium"][i % 2]
      }

    : type === "Commercial"
    ? {
        address: `${100 + i} Business Park`,
        floorNumber: (i % 10) + 1,
        conferenceRooms: (i % 5) + 1,
        receptionArea: true,
        cabins: (i % 10) + 1,
        workstations: 20 + i,
        pantry: true,
        washrooms: (i % 4) + 1,
        powerBackup: true,
        internetReady: true,
        liftAccess: true,
        nearbyMetro: `${500 + i}m`,
        trafficCondition: ["Medium", "High"][i % 2],
        businessDemand: ["High", "Medium"][i % 2],
        safetyScore: (i % 3) + 8
      }

    : type === "Land"
    ? {
        address: `${200 + i} Green Acres`,
        plotWidth: 40 + (i % 20),
        plotLength: 60 + (i % 30),
        cornerPlot: i % 2 === 0,
        roadWidth: 30 + (i % 20),
        facingDirection: ["East", "West", "North", "South"][i % 4],
        boundaryWall: i % 2 === 0,
        waterConnection: true,
        electricityConnection: true,
        approvedLayout: true,
        zoningType: ["Residential", "Commercial"][i % 2],
        nearbySchools: (i % 8) + 1,
        nearbyHospitals: (i % 5) + 1,
        metroConnectivity: ["Good", "Moderate"][i % 2],
        safetyScore: (i % 3) + 8,
        propertyDemand: ["High", "Medium"][i % 2],
        futureDevelopmentPotential: ["High", "Excellent"][i % 2]
      }

    : {
        address: `${300 + i} Student Residency`,
        genderPreference: ["Boys", "Girls", "Co-Living"][i % 3],
        totalBeds: 50,
        availableBeds: (i % 15) + 1,
        attachedBathroom: true,
        wifiAvailable: true,
        foodIncluded: true,
        laundryService: true,
        housekeeping: true,
        acRoom: i % 2 === 0,
        powerBackup: true,
        security: true,
        cctv: true,
        nearbyCollege: `College ${i % 5}`,
        nearbyMetro: `${400 + i}m`,
        safetyScore: (i % 3) + 8,
        occupancyRate: `${80 + (i % 20)}%`
      },
  });
}

export default properties;