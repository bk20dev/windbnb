import Field from './Field';
import GuestHintList from './GuestHintList';
import PlaceHintList from './PlaceHintList';
import SearchButton from './SearchButton';

const places = [
  { country: 'Finland' },
  { country: 'Finland', city: 'Helsinki' },
];

const Search = () => (
  <div className="absolute top-0 left-0 bg-gray-600 bg-opacity-40 w-full h-full">
    <div className="bg-white p-24">
      <div className="flex border border-gray-100 rounded-2xl divide-x divide-gray-100">
        <div className="w-1/3 flex-grow">
          <Field
            name="Location"
            placeholder="Where are you going?"
            value="Helsinki, Finland"
            onChange={console.log}
          />
        </div>
        <div className="w-1/3 flex-grow">
          <Field name="Guests" placeholder="Add guests" value="" readOnly />
        </div>
        <div className="w-1/3 flex-grow flex items-center">
          <SearchButton />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 flex-grow">
          <PlaceHintList places={places} />
        </div>
        <div className="w-1/3 flex-grow">
          <GuestHintList
            guests={{ adults: 0, children: 0 }}
            setGuests={() => {}}
          />
        </div>
        <div className="w-1/3 flex-grow"></div>
      </div>
    </div>
  </div>
);

export default Search;
