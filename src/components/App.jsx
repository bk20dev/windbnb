import _ from 'lodash';
import { connect } from 'react-redux';
import StaysList from './StaysList';

const App = ({ stays }) => (
  <div className="text-gray-800">
    <StaysList stays={stays} />
  </div>
);

const mapStateToProps = (state) => _.pick(state, 'stays');

export default connect(mapStateToProps)(App);
