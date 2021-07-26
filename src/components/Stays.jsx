import _ from 'lodash';
import { useMemo } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import StaysHeader from './StaysHeader';
import StaysList from './StaysList';

const Stays = ({ stays, filters }) => {
  const filtered = useMemo(() => {
    const { place, guests } = filters;
    const guestCount = guests.adults + guests.children;

    return stays.filter((stay) => {
      if (place.country) {
        if (place.country !== stay.country) return false;
        if (place.city && place.city !== stay.city) return false;
      }

      if (guestCount && guestCount >= stay.maxGuests) return false;
      return true;
    });
  }, [stays, filters]);

  return (
    <div className="px-4 landscape:px-8">
      <Navigation />
      <StaysHeader place={filters.place} count={filtered.length} />
      <StaysList stays={filtered} />
    </div>
  );
};

const mapStateToProps = (state) => _.pick(state, 'stays', 'filters');

export default connect(mapStateToProps)(Stays);
