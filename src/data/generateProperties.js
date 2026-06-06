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
  "Darwin"
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

  // ✅ FIXED (NO RANDOM EVERY RENDER)
  const images = imageMap[type];

  properties.push({
    id: i,

    title: `${type} Property ${i}`,
    type,
    location,

    // 🔥 IMPORTANT:
    image: images[0],   // ONLY FIRST IMAGE (for card)

    images: images,     // FULL LIST (for details page)

    price: 500000 + i * 1000,

    mode: i % 2 === 0 ? "buy" : "rent",

    bedrooms: type === "Land" ? null : 2,
    bathrooms: type === "Land" ? null : 2,
    area: type === "Land" ? 5000 : 1200,

    description:
      "Beautiful modern property with premium amenities and excellent connectivity."
  });
}

export default properties;