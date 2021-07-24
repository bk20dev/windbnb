import Logo from '../assets/logo.svg';
import SearchSummary from './SearchSummary';

const items = [
  { content: 'Helsinki, finland', active: true },
  { content: 'Add guests', active: false },
];

const Navigation = () => (
  <nav className="flex items-center justify-between py-8">
    <img src={Logo} alt="Windbnb" className="h-6" />
    <SearchSummary items={items} onClick={console.log} />
  </nav>
);

export default Navigation;
