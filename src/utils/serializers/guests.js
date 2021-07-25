import singularOrPlural from '../singularOrPlural';

const serializeGuests = (guests) => {
  if (!guests) return '';

  const { adults, children } = guests;
  const guestCount = adults + children;

  if (!guestCount) return '';

  if (adults && children)
    return `${singularOrPlural(adults, 'adult', 'adults')}, ${singularOrPlural(
      children,
      'child',
      'children'
    )}`;

  if (adults) return singularOrPlural(adults, 'adult', 'adults');
  return singularOrPlural(children, 'child', 'children');
};

export default serializeGuests;
