function FilterProperties({ filters, setFilters }) {
  return (
    <div className="filters">

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Land">Land</option>
        <option value="Commercial">Commercial</option>
      </select>

      <select
        value={filters.mode}
        onChange={(e) =>
          setFilters({ ...filters, mode: e.target.value })
        }
      >
        <option value="">Buy/Rent</option>
        <option value="buy">Buy</option>
        <option value="rent">Rent</option>
      </select>

      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) =>
          setFilters({ ...filters, minPrice: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      />
    </div>
  );
}

export default FilterProperties;