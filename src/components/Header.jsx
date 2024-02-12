import ElkLogo from '../assets/images/ElkLogo.svg';
const Header = () => {
  return (
    <div>
    <header className="header height-cap">
      <div className = "justify-left">
      <img src={ElkLogo} alt="Logo" className="height-cap" />
      </div>
      <h1 className = "header-title">Blue Mesa Point</h1>
    </header>
    </div>
  );
}

export default Header;
