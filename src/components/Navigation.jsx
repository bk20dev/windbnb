import _ from 'lodash';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import Logo from '../assets/logo.svg';
import serializePlace from '../utils/serializers/place';
import serializeGuests from '../utils/serializers/guests';
import SearchSummary from './SearchSummary';

const Navigation = ({ search }) => {
  const items = useMemo(() => {
    const { place, guests } = search;

    const placeText = serializePlace(place);
    const guestText = serializeGuests(guests);

    return [
      { content: placeText || 'Where are you going?', active: !!placeText },
      { content: guestText || 'Add guests', active: !!guestText },
    ];
  }, [search]);

  return (
    <nav className="flex flex-col items-start landscape:flex-row landscape:items-center landscape:justify-between">
      <img src={Logo} alt="Windbnb" className="h-6 my-6 landscape:my-8" />
      <SearchSummary items={items} onClick={console.log} />
    </nav>
  );
};

const mapStateToProps = (state) => _.pick(state, 'search');

export default connect(mapStateToProps)(Navigation);
