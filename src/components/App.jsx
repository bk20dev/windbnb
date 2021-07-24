import _ from 'lodash';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import StaysHeader from './StaysHeader';
import StaysList from './StaysList';

const App = ({ stays }) => (
  <div className="text-gray-800">
    <Navigation />
    <StaysHeader place={{ country: 'Finland', city: 'Helsinki' }} count={14} />
    <StaysList stays={stays} />
  </div>
);

const mapStateToProps = (state) => _.pick(state, 'stays');

export default connect(mapStateToProps)(App);
