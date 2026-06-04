const types = ["Apartment", "Villa", "Townhouse", "Commercial", "Luxury", "Land"];

const locations = [
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
  ]
};

const properties = [];

for (let i = 1; i <= 150; i++) {
  const type = types[i % types.length];
  const location = locations[i % locations.length];

  const images = imageMap[type];
  const image = images[Math.floor(Math.random() * images.length)];

  const price = Math.floor(Math.random() * 2000000) + 150000;

  properties.push({
    id: i,
    title: `${type} Property ${i}`,
    type,
    location,
    price,
    image,
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 4) + 1,
    area: Math.floor(Math.random() * 2000) + 500,
    description:
      "Beautiful modern property located in a prime location with premium amenities and excellent connectivity.",
    mode: i % 2 === 0 ? "buy" : "rent"
  });
}

export default properties;