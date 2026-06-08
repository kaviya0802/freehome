import { useState, useEffect } from "react";
import properties from "../../data/generateProperties";
import { generateAreaInsights } from "./areaInsights";
import "./AreaInsights.css";

export default function AreaInsights() {
  const [location, setLocation] = useState("Sydney");
  const [insights, setInsights] = useState(null);

  const locations = [...new Set(properties.map(p => p.location))];

  useEffect(() => {
    const result = generateAreaInsights(properties, location);
    setInsights(result);
  }, [location]);

  if (!insights) {
    return (
      <div className="ai-container">
        <h2>No Data Found</h2>
      </div>
    );
  }

  return (
    <div className="ai-container">

      <h1>🏡 Area Insights</h1>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <div className="ai-card">
        <h2>{insights.location}</h2>
        <p>Total Properties: {insights.totalProperties}</p>
        <p>Avg Price: ${insights.avgPrice}</p>
        <p>Safety: {insights.avgSafety}/10</p>
        <p>Demand: {insights.demandPercent}%</p>
        <p>Schools Avg: {insights.schoolAvg}</p>
      </div>

    </div>
  );
}