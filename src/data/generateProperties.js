const normalize = (str) =>
  (str || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

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
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Canberra",
  "Gold Coast",
  "Hobart",
  "Darwin",
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Northern Territory"
];

const pgImages = [
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
  "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800"
];

const imageMap = {
  Apartment: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
  ],
  Villa: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
  ],
  Townhouse: [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
  ],
  Commercial: [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
  ],
  Luxury: [
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
  ],
  Land: [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
  ],
  "PG Hostel": pgImages
};

const properties = [];

for (let i = 1; i <= 150; i++) {
  const type = TYPES[i % TYPES.length];
  const location = LOCATIONS[i % LOCATIONS.length];

  const images = imageMap[type] || imageMap["Apartment"];
  const image = images[Math.floor(Math.random() * images.length)];

  const isPG = type === "PG Hostel";

let mode;
let price;

// PG Hostel
if (isPG) {
  mode = "rent";
  price = Math.floor(Math.random() * 700) + 250; // $250-$950/week
}

// Land
else if (type === "Land") {
  mode = "buy";
  price = Math.floor(Math.random() * 1500000) + 200000; // $200k-$1.7M
}

// Other Properties
else {
  mode = i % 2 === 0 ? "buy" : "rent";

  if (mode === "buy") {
    // Realistic Australia purchase prices
    price = Math.floor(Math.random() * 1800000) + 350000;
    // $350k - $2.15M
  } else {
    // Weekly rent prices
    price = Math.floor(Math.random() * 1000) + 350;
    // $350 - $1350/week
  }
}

  properties.push({
    id: i,
    title: isPG
      ? `PG Hostel in ${location}`
      : `${type} Property ${i}`,

    type,
    location,
    price,
    image,
commercialType:
    type === "Commercial"
      ? ["Office", "Retail", "Warehouse", "Medical"][
          Math.floor(Math.random() * 4)
        ]
      : null,

commercialUnits:
  type === "Commercial"
    ? Math.floor(Math.random() * 20) + 5
    : null,

parkingSpaces:
  type === "Commercial"
    ? Math.floor(Math.random() * 50) + 10
    : null,

  bedrooms:
  type === "Land"
    ? null
    : isPG
    ? 1
    : Math.floor(Math.random() * 5) + 1,

bathrooms:
  type === "Land"
    ? null
    : isPG
    ? 1
    : Math.floor(Math.random() * 4) + 1,

area:
  type === "Land"
    ? Math.floor(Math.random() * 10000) + 2000
    : isPG
    ? "Shared"
    : Math.floor(Math.random() * 2000) + 500,

zoning:
  type === "Land"
    ? ["Residential", "Commercial", "Mixed Use"][
        Math.floor(Math.random() * 3)
      ]
    : null,

    description: isPG
      ? "Affordable PG/Hostel with shared rooms, WiFi, food facilities and secure environment."
      : "Beautiful modern property with premium amenities and excellent connectivity.",

    mode
  });
}

export default properties;