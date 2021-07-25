const singularOrPlural = (count, singular, plural) => {
  if (count === 1) return `${count} ${singular}`;
  return `${count} ${plural}`;
};

export default singularOrPlural;
