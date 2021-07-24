import serializePlace from '../utils/serializers/place';

const StaysHeader = ({ place, count }) => {
  const getCountText = (count) => {
    if (count > 12) return '12+ stays';
    if (count === 1) return '1 stay';
    return `${count} stays`;
  };

  const location = serializePlace(place);

  return (
    <header className="my-8 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Stays {place ? `in ${location}` : 'worldwide'}
      </h1>
      <p className="text-sm font-medium text-gray-600">{getCountText(count)}</p>
    </header>
  );
};

export default StaysHeader;
