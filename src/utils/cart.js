const CART_KEY = 'dubai_global_express_selected_car';

export const formatPrice = (price) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(price);

export const saveSelectedCar = (car) => {
  localStorage.setItem(CART_KEY, JSON.stringify(car));
};

export const getSelectedCar = () => {
  try {
    const item = localStorage.getItem(CART_KEY);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Impossible de lire le panier', error);
    return null;
  }
};

export const clearSelectedCar = () => {
  localStorage.removeItem(CART_KEY);
};
