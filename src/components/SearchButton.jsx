import SearchIcon from '../assets/search_light.svg';

const IconButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex py-4 px-6 items-center gap-3 bg-red-500 rounded-2xl m-auto"
  >
    <img src={SearchIcon} alt="" />
    <span className="text-white">Search</span>
  </button>
);

export default IconButton;
