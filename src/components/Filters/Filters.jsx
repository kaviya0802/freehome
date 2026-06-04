export function filterProperties(properties, filters) {
  return properties.filter((p) => {

    const location = filters.location?.toLowerCase().trim();
    const type = filters.type?.toLowerCase().trim();

    const matchLocation =
      !location || p.location.toLowerCase().trim() === location;

    const matchType =
      !type || p.type.toLowerCase().trim() === type;

    const price = Number(p.price);

    let matchBudget = true;

    if (filters.budget === "200k") {
      matchBudget = price >= 200000 && price <= 500000;
    }

    if (filters.budget === "500k") {
      matchBudget = price > 500000 && price <= 1000000;
    }

    if (filters.budget === "1m") {
      matchBudget = price > 1000000;
    }

    return matchLocation && matchType && matchBudget;
  });
}