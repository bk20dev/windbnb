import { Fragment } from 'react';
import SearchIcon from '../assets/search.svg';

const SearchSummary = ({ items, onClick }) => {
  const renderFields = (items) =>
    items.map(({ content, active }, i) => {
      const color = active ? 'text-current' : 'text-gray-300';

      return (
        <Fragment key={i}>
          <div
            className="flex items-center cursor-pointer h-14 px-4 hover:bg-gray-100"
            onClick={() => onClick(i)}
          >
            <span className={color}>{content}</span>
          </div>
          <span className="border-r border-gray-100 h-14" />
        </Fragment>
      );
    });

  return (
    <div className="flex items-center rounded-2xl overflow-hidden shadow-blur select-none h-14 mx-auto my-4 landscape:mx-0 landscape:my-8">
      {renderFields(items)}
      <img src={SearchIcon} alt="Search" className="px-4" />
    </div>
  );
};

export default SearchSummary;
