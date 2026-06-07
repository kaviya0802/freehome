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
    area: type === "Land"
      ? Math.floor(Math.random() * 8000) + 2000
      : Math.floor(Math.random() * 2000) + 500,

    yearBuilt: 1990 + (i % 35),
    condition: ["New", "Good", "Renovated", "Well Maintained"][i % 4],
    furnished:
  type === "Land"
    ? false
    : type === "PG Hostel"
    ? true
    : Math.random() > 0.5,
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
    description: `${type} property offering modern design, excellent connectivity, and premium lifestyle.`,

    // TYPE SPECIFIC
    villaFeatures: type === "Villa" ? {
      pool: i % 2 === 0,
      garden: true,
      security: "Gated Community"
    } : null,
    townhouseFeatures: type === "Townhouse" ? {
  sharedWalls: true,
  communityType: "Gated Community",
  parking:
  type === "Apartment" ? 1 + (i % 2) :
  type === "Townhouse" ? 1 + (i % 2) :
  type === "Villa" ? 2 + (i % 2) :
  type === "Luxury" ? 3 + (i % 3) :
  type === "Commercial" ? 5 + (i % 10) :
  type === "Land" ? 0 :
  type === "PG Hostel" ? 0 :
  0,

  duplex: i % 2 === 0,
  garden: i % 3 === 0,
} : null,

    apartmentFeatures: type === "Apartment" ? {
      floor: (i % 20) + 1,
      lift: true,
      amenities: ["Gym", "Pool", "Security"]
    } : null,

    luxuryFeatures: type === "Luxury" ? {
      smartHome: true,
      privatePool: true,
      concierge: true
    } : null,

    commercialFeatures: type === "Commercial" ? {
      officeType: "Corporate Space",
      parkingSpaces: 10 + (i % 10)
    } : null,

    landFeatures: type === "Land" ? {
      soilType: ["Clay", "Sandy", "Loamy"][i % 3],
      roadAccess: true
    } : null
  });
}

export default properties;