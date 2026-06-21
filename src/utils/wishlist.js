const getWishlistKey = () => {
  const currentUser =
    JSON.parse(
      localStorage.getItem("currentUser")
    );

  if (!currentUser?.id) {
    return "freehome_wishlist_guest";
  }

  return `freehome_wishlist_${currentUser.id}`;
};

// Get wishlist
export const getWishlist = () => {
  try {
    return (
      JSON.parse(
        localStorage.getItem(
          getWishlistKey()
        )
      ) || []
    );
  } catch {
    return [];
  }
};

// Add property
export const addToWishlist = (
  property
) => {
  const list = getWishlist();

  const exists = list.some(
    (item) =>
      String(item.id) ===
      String(property.id)
  );

  if (exists) return list;

  const updated = [
    ...list,
    property,
  ];

  localStorage.setItem(
    getWishlistKey(),
    JSON.stringify(updated)
  );

  return updated;
};

// Remove property
export const removeFromWishlist = (
  id
) => {
  const list = getWishlist();

  const updated =
    list.filter(
      (item) =>
        String(item.id) !==
        String(id)
    );

  localStorage.setItem(
    getWishlistKey(),
    JSON.stringify(updated)
  );

  return updated;
};

// Check if exists
export const isWishlisted = (
  id
) => {
  return getWishlist().some(
    (item) =>
      String(item.id) ===
      String(id)
  );
};