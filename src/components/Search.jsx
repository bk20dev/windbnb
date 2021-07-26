import _ from 'lodash';
import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { applyFilters } from '../actions';
import useSearch from '../hooks/useSearch';
import serializePlace from '../utils/serializers/place';
import singularOrPlural from '../utils/singularOrPlural';
import Field from './Field';
import GuestHintList from './GuestHintList';
import PlaceHintList from './PlaceHintList';
import SearchButton from './SearchButton';

const Search = ({ stays, filters, applyFilters }) => {
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
  const guestCount = guests.adults + guests.children;

  const searchResults = useSearch(
    uniquePlaces,
    ['country', 'city'],
    4,
    searchText
  );

  return (
    <div className="absolute top-0 left-0 bg-gray-600 bg-opacity-40 w-full h-full">
      <div className="bg-white p-24">
        <div className="flex border border-gray-100 rounded-2xl divide-x divide-gray-100">
          <div className="w-1/3 flex-grow">
            <Field
              name="Location"
              placeholder="Where are you going?"
              value={searchText}
              setValue={setSearchText}
            />
          </div>
          <div className="w-1/3 flex-grow">
            <Field
              name="Guests"
              placeholder="Add guests"
              value={singularOrPlural(guestCount, 'guest', 'guests')}
              readOnly
            />
          </div>
          <div className="w-1/3 flex-grow flex items-center">
            <SearchButton onClick={() => applyFilters({ place, guests })} />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 flex-grow">
            <PlaceHintList
              places={searchResults}
              onSelect={(place) => {
                setPlace(place);
                setSearchText(serializePlace(place));
              }}
            />
          </div>
          <div className="w-1/3 flex-grow">
            <GuestHintList guests={guests} setGuests={setGuests} />
          </div>
          <div className="w-1/3 flex-grow"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => _.pick(state, 'filters', 'stays');

export default connect(mapStateToProps, { applyFilters })(Search);
