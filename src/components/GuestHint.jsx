import MinusIcon from '../assets/minus.svg';
import PlusIcon from '../assets/plus.svg';

const GuestHint = ({ name, description, count, setCount }) => (
  <div>
    <p className="text-sm font-bold">{name}</p>
    <p className="text-sm text-gray-400">{description}</p>

    <div className="flex items-center gap-4 mt-3">
      <button
        className="border border-gray-500 rounded"
        onClick={() => setCount(count - 1)}
      >
        <img className="w-5" src={MinusIcon} alt="Remove guests" />
      </button>

      <span className="text-sm font-bold">{count}</span>

      <button
        className="border border-gray-500 rounded"
        onClick={() => setCount(count + 1)}
      >
        <img className="w-5" src={PlusIcon} alt="Add guests" />
      </button>
    </div>
  </div>
);

export default GuestHint;
