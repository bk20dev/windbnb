import SearchIcon from '../assets/search.svg';
import { Fragment } from 'react';

const SearchSummary = ({ items, onClick }) => {
  const renderFields = (items) =>
    items.map(({ content, active }, i) => {
      const color = active ? 'text-current' : 'text-gray-300';

      return (
        <Fragment key={i}>
          <span
            className={`leading-14 px-4 hover:bg-gray-100 cursor-pointer ${color}`}
            onClick={() => onClick(i)}
          >
            {content}
          </span>
          <span className="border-r border-gray-100 h-14" />
        </Fragment>
      );
    });

  return (
    <div className="flex items-center shadow-blur rounded-2xl overflow-hidden select-none h-14">
      {renderFields(items)}
      <img src={SearchIcon} alt="Search" className="px-4" />
    </div>
  );
};

export default SearchSummary;
