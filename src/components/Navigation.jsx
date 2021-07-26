import _ from 'lodash';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import { openSearch } from '../actions';
import Logo from '../assets/logo.svg';
import serializePlace from '../utils/serializers/place';
import singularOrPlural from '../utils/singularOrPlural';
import SearchSummary from './SearchSummary';

const Navigation = ({ filters, openSearch }) => {
  const items = useMemo(() => {
    const { place, guests } = filters;
    const guestCount = guests.adults + guests.children;

    const placeText = serializePlace(place);
    const guestText = singularOrPlural(guestCount, 'guest', 'guests');

    return [
      {
        content: placeText || 'Where are you going?',
        active: !!placeText,
      },
      {
        content: (guestCount && guestText) || 'Add guests',
        active: !!guestCount,
      },
    ];
  }, [filters]);

  return (
    <nav className="flex flex-col items-start landscape:flex-row landscape:justify-between landscape:items-center">
      <img src={Logo} alt="Windbnb" className="h-6 my-6 landscape:my-8" />
      <SearchSummary items={items} onClick={openSearch} />
    </nav>
  );
};

const mapStateToProps = (state) => _.pick(state, 'filters');

export default connect(mapStateToProps, { openSearch })(Navigation);
