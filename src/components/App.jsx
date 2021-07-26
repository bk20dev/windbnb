import _ from 'lodash';
import { connect } from 'react-redux';
import Footer from './Footer';
import Search from './Search';
import Stays from './Stays';

const App = ({ searchBar }) => (
  <div
    className={`text-gray-800 max-w-7xl min-h-screen h-screen mx-auto ${
      searchBar.visible ? 'overflow-hidden' : ''
    }`}
  >
    <Stays />
    <Footer />
    {searchBar.visible && <Search />}
  </div>
);

const mapStateToProps = (state) => _.pick(state, 'searchBar');

export default connect(mapStateToProps)(App);
