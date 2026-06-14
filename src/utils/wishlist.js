const getWishlistKey = () => {
  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  return `freehome_wishlist_${currentUser.id}`;
};

// Get wishlist
export const getWishlist = () => {
  return JSON.parse(
  localStorage.getItem(getWishlistKey())
) || [];
};

// Add property
export const addToWishlist = (property) => {
  const list = getWishlist();

  const exists = list.find((item) => item.id === property.id);
  if (exists) return list;

  const updated = [...list, property];
  localStorage.setItem(
  getWishlistKey(),
  JSON.stringify(updated)
);
  return updated;
};

// Remove property
export const removeFromWishlist = (id) => {
  const list = getWishlist();
  const updated = list.filter((item) => item.id !== id);
  localStorage.setItem(
  getWishlistKey(),
  JSON.stringify(updated)
);
  return updated;
};

// Check if exists
export const isWishlisted = (id) => {
  return getWishlist().some((item) => item.id === id);
};