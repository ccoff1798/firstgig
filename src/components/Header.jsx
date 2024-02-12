import ElkLogo from '../assets/images/ElkLogo.svg';
const Header = () => {
  return (
    <div>
    <header className="header">
      <img src={ElkLogo} alt="Logo" className='justify-left scale-down' />
      <h1 className = "header-title">Blue Mesa Point</h1>
    </header>
    </div>
  );
}

export default Header;
