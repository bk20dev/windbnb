import Card from './Card';

const StaysList = ({ stays }) => {
  const getBedsText = (count) => {
    if (!count) return '';
    return ` · ${count} ${count === 1 ? 'bed' : 'beds'}`;
  };

  return (
    <div className="grid grid-cols-1 gap-8 landscape:grid-cols-card-list">
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
