import _ from 'lodash';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import StaysHeader from './StaysHeader';
import StaysList from './StaysList';

const App = ({ stays, search }) => {
  const filtered = useMemo(() => {
    const { place, guests } = search;
    const guestCount = guests.adults + guests.children;

    return stays.filter((stay) => {
      if (place.country) {
        if (place.country !== stay.country) return false;
        if (place.city && place.city !== stay.city) return false;
      }

      if (guestCount && guestCount >= stay.maxGuests) return false;
      return true;
    });
  }, [stays, search]);

  return (
    <div className="text-gray-800">
      <Navigation />
      <StaysHeader place={search.place} count={filtered.length} />
      <StaysList stays={filtered} />
    </div>
  );
};

const mapStateToProps = (state) => _.pick(state, 'stays', 'search');

export default connect(mapStateToProps)(App);
