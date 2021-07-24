import Logo from '../assets/logo.svg';

const Navigation = () => (
  <nav className="flex items-center justify-between py-8">
    <img src={Logo} alt="Windbnb" className="h-6" />
    <p>Search summary</p>
  </nav>
);

export default Navigation;
