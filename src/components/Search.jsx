import _ from 'lodash';
import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { applyFilters, closeSearch, openSearch } from '../actions';
import useSearch from '../hooks/useSearch';
import serializePlace from '../utils/serializers/place';
import singularOrPlural from '../utils/singularOrPlural';
import Field from './Field';
import GuestHintList from './GuestHintList';
import PlaceHintList from './PlaceHintList';
import SearchButton from './SearchButton';
import SearchNavigationMobile from './SearchNavigationMobile';

const HintTab = ({ active, children }) => {
  const display = active ? 'block' : 'hidden';
  const visibility = active ? 'visible' : 'invisible';

  return (
    <div
      className={`landscape:w-1/3 flex-grow ${display} landscape:${visibility} landscape:block`}
    >
      {children}
    </div>
  );
};

const Search = ({
  stays,
  filters,
  applyFilters,
  searchBar,
  openSearch,
  closeSearch,
}) => {
  const [guests, setGuests] = useState(filters.guests);
  const guestCount = guests.adults + guests.children;

  const [searchText, setSearchText] = useState(serializePlace(filters.place));

  const uniquePlaces = useMemo(
    () =>
      _.chain(stays)
        .map((place) => _.pick(place, 'city', 'country'))
        .uniqWith(_.isEqual)
        .map(({ city, country }) => ({
          city,
          country,
          flat: `${city}, ${country}`,
        }))
        .value(),
    [stays]
  );

  const searchResults = useSearch(uniquePlaces, ['flat'], 4, searchText);

  const activeField = searchBar.activeField;

  const search = () => {
    const place = (searchText && searchResults[0]) || {
      country: null,
      city: null,
    };

    applyFilters({ place, guests });
    closeSearch();
  };

  return (
    <div
      className="absolute top-0 left-0 bg-gray-600 bg-opacity-40 w-full h-full"
      onClick={closeSearch}
    >
      <div
        className="bg-white px-4 pb-6 landscape:px-8 landscape:py-24 h-5/6 landscape:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col max-w-7xl h-full mx-auto">
          <div className="landscape:hidden">
            <SearchNavigationMobile onClose={() => closeSearch()} />
          </div>

          {/* Search Bar */}
          <div className="flex flex-col landscape:flex-row border border-gray-100 rounded-2xl divide-x-0 divide-y landscape:divide-x landscape:divide-y-0 divide-gray-100">
            <div className="landscape:w-1/3 flex-grow">
              <Field
                name="Location"
                placeholder="Where are you going?"
                value={searchText}
                setValue={setSearchText}
                onFocus={() => openSearch(0)}
              />
            </div>
            <div className="landscape:w-1/3 flex-grow">
              <Field
                name="Guests"
                placeholder="Add guests"
                value={singularOrPlural(guestCount, 'guest', 'guests')}
                onFocus={() => openSearch(1)}
                readOnly
              />
            </div>
            <div className="landscape:w-1/3 flex-grow items-center hidden landscape:flex">
              <SearchButton onClick={search} />
            </div>
          </div>

          {/* Hints */}
          <div className="flex flex-col landscape:flex-row flex-grow landscape:flex-grow-0">
            <HintTab active={activeField === 0}>
              <PlaceHintList
                places={searchResults}
                onSelect={(place) => setSearchText(serializePlace(place))}
              />
            </HintTab>
            <HintTab active={activeField === 1}>
              <GuestHintList guests={guests} setGuests={setGuests} />
            </HintTab>
            <div className="landscape:w-1/3 flex-grow"></div>
          </div>

          {/* Mobile Search Button */}
          <div className="block landscape:hidden mt-6">
            <SearchButton onClick={search} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>
  _.pick(state, 'filters', 'stays', 'searchBar');

export default connect(mapStateToProps, {
  applyFilters,
  openSearch,
  closeSearch,
})(Search);
