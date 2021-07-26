import PlaceHint from './PlaceHint';

const PlaceHintList = ({ places, onSelect }) => (
  <div className="flex flex-col px-7 pt-6">
    {places.map((place, i) => (
      <PlaceHint key={i} place={place} onClick={() => onSelect(place)} />
    ))}
  </div>
);

export default PlaceHintList;
