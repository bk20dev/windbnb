import CloseIcon from '../assets/close.svg';

const SearchNavigationMobile = ({ onClose }) => (
  <div className="flex items-center justify-between my-3">
    <span className="text-xs font-bold">Edit your search</span>
    <img src={CloseIcon} alt="Close" onClick={onClose} className="h-6" />
  </div>
);

export default SearchNavigationMobile;
