import SearchIcon from '../assets/search.svg';
import { Fragment } from 'react';

const SearchSummary = ({ items, onClick }) => {
  const renderFields = (items) =>
    items.map(({ content, active }, i) => {
      const color = active ? 'text-current' : 'text-gray-300';

      return (
        <Fragment key={i}>
          <div className="h-14 px-4 flex items-center hover:bg-gray-100 cursor-pointer">
            <span className={color} onClick={() => onClick(i)}>
              {content}
            </span>
          </div>
          <span className="border-r border-gray-100 h-14" />
        </Fragment>
      );
    });

  return (
    <div className="flex items-center shadow-blur rounded-2xl overflow-hidden select-none h-14 my-4 landscape:my-8 mx-auto landscape:mx-0">
      {renderFields(items)}
      <img src={SearchIcon} alt="Search" className="px-4" />
    </div>
  );
};

export default SearchSummary;
