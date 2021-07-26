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

const Search = ({
  stays,
  filters,
  applyFilters,
  searchBar,
  openSearch,
  closeSearch,
}) => {
  const [guests, setGuests] = useState(filters.guests);
  const [place, setPlace] = useState(filters.place);

  const uniquePlaces = useMemo(
    () =>
      _.chain(stays)
        .map((place) => _.pick(place, 'city', 'country'))
        .uniqWith(_.isEqual)
        .value(),
    [stays]
  );

  const [searchText, setSearchText] = useState('');
  const activeField = searchBar.activeField;

  const guestCount = guests.adults + guests.children;

  const searchResults = useSearch(
    uniquePlaces,
    ['country', 'city'],
    4,
    searchText
  );

  return (
    <div
      className="absolute top-0 left-0 bg-gray-600 bg-opacity-40 w-full h-full"
      onClick={closeSearch}
    >
      <div className="bg-white p-24" onClick={(e) => e.stopPropagation()}>
        <div className="flex border border-gray-100 rounded-2xl divide-x divide-gray-100">
          <div className="w-1/3 flex-grow">
            <Field
              name="Location"
              placeholder="Where are you going?"
              value={searchText}
              setValue={setSearchText}
              onFocus={() => openSearch(0)}
            />
          </div>
          <div className="w-1/3 flex-grow">
            <Field
              name="Guests"
              placeholder="Add guests"
              value={singularOrPlural(guestCount, 'guest', 'guests')}
              onFocus={() => openSearch(1)}
              readOnly
            />
          </div>
          <div className="w-1/3 flex-grow flex items-center">
            <SearchButton
              onClick={() => {
                applyFilters({ place, guests });
                closeSearch();
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div
            className={`w-1/3 flex-grow ${
              activeField === 0 ? 'visible' : 'invisible'
            }`}
          >
            <PlaceHintList
              places={searchResults}
              onSelect={(place) => {
                setPlace(place);
                setSearchText(serializePlace(place));
              }}
            />
          </div>
          <div
            className={`w-1/3 flex-grow ${
              activeField === 1 ? 'visible' : 'invisible'
            }`}
          >
            <GuestHintList guests={guests} setGuests={setGuests} />
          </div>
          <div className="w-1/3 flex-grow"></div>
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
