export function generateAreaInsights(properties, location) {
  const filtered = properties.filter(
    (p) => p.location === location
  );

  if (filtered.length === 0) return null;

  const total = filtered.length;

  const avgPrice =
    filtered.reduce((sum, p) => sum + p.price, 0) / total;

  const avgSafety =
    filtered.reduce(
      (sum, p) =>
        sum + (p.propertyDetails?.safetyScore || 0),
      0
    ) / total;

  const demandPercent =
    (filtered.filter(
      (p) => p.propertyDetails?.propertyDemand === "High"
    ).length / total) * 100;

  const schoolAvg =
    filtered.reduce(
      (sum, p) =>
        sum + (p.propertyDetails?.nearbySchools || 0),
      0
    ) / total;

  return {
    location,
    totalProperties: total,
    avgPrice: Math.round(avgPrice),
    avgSafety: avgSafety.toFixed(1),
    demandPercent: demandPercent.toFixed(1),
    schoolAvg: schoolAvg.toFixed(1),
  };
}