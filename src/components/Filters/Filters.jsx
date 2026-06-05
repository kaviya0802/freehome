export function filterProperties(properties, filters) {
  const normalize = (str) =>
    (str || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "")
      .replace(/\//g, "")
      .replace(/-/g, "");

  const location = normalize(filters.location);
  const type = normalize(filters.type);
  const mode = filters.mode?.toLowerCase();

  return properties.filter((p) => {
    const matchLocation =
      !location || normalize(p.location) === location;

    const matchType =
      !type || normalize(p.type) === type;

    const matchMode =
      !mode || p.mode?.toLowerCase() === mode;

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

    return matchLocation && matchType && matchBudget && matchMode;
  });
}