const serializePlace = (place) => {
  if (!place || !place.country) return '';

  const { country, city } = place;
  if (city) return `${city}, ${country}`;
  return country;
};

export default serializePlace;
