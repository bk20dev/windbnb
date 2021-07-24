import Card from './Card';

const StaysList = ({ stays }) => {
  const getBedsText = (count) => {
    if (!count) return '';
    return ` · ${count} ${count === 1 ? 'bed' : 'beds'}`;
  };

  return (
    <div
      className="grid gap-8"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(24.75rem, 1fr))' }}
    >
      {stays.map(({ title, photo, rating, type, beds, superHost }, i) => (
        <Card
          key={i}
          name={title}
          img={photo}
          rating={rating}
          type={`${type}${getBedsText(beds)}`}
          isSuperHost={superHost}
        />
      ))}
    </div>
  );
};

export default StaysList;
