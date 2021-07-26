import Field from './Field';
import SearchButton from './SearchButton';

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
      <div>Suggestions</div>
    </div>
  </div>
);

export default Search;
