import PlaceIcon from '../assets/place.svg';
import serializePlace from '../utils/serializers/place';

const PlaceHint = ({ place, onClick }) => (
  <div className="flex items-center gap-1 py-4">
    <img src={PlaceIcon} alt="" />
    <span className="text-sm text-gray-600 cursor-pointer" onClick={onClick}>
      {serializePlace(place)}
    </span>
  </div>
);

export default PlaceHint;
