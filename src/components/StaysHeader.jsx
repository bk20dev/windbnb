import serializePlace from '../utils/serializers/place';

const StaysHeader = ({ place, count }) => {
  const getCountText = (count) => {
    if (count > 12) return '12+ stays';
    if (count === 1) return '1 stay';
    return `${count} stays`;
  };

  const placeText = serializePlace(place);

  return (
    <header className="flex justify-between items-center my-8">
      <h1 className="text-2xl font-bold">
        Stays {placeText ? `in ${placeText}` : 'worldwide'}
      </h1>
      <p className="text-sm font-medium text-gray-600">{getCountText(count)}</p>
    </header>
  );
};

export default StaysHeader;
