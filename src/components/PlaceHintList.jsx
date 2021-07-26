import PlaceHint from './PlaceHint';

const PlaceHintList = ({ places }) => (
  <div className="flex flex-col px-7 pt-6">
    {places.map((place, i) => (
      <PlaceHint key={i} place={place} />
    ))}
  </div>
);

export default PlaceHintList;
