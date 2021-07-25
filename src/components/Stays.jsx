import _ from 'lodash';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import StaysHeader from './StaysHeader';
import StaysList from './StaysList';

const Stays = ({ stays, search }) => {
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
    <div className="px-4 landscape:px-8">
      <Navigation />
      <StaysHeader place={search.place} count={filtered.length} />
      <StaysList stays={filtered} />
    </div>
  );
};

const mapStateToProps = (state) => _.pick(state, 'stays', 'search');

export default connect(mapStateToProps)(Stays);
