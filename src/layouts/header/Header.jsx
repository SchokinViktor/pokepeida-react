import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../../assets/images/logo-header.png";
import NavLogo from "../../assets/images/logo-footer.svg";
import HomeIcon from "../../components/icons/HomeIcon";
import PokedexIcon from "../../components/icons/PokedexIcon";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const location = useLocation;

  useEffect(() => {
    setActive(false);
    console.log("it works!");
  }, [location]);

  return (
    <header className={active ? "header header_active" : "header"}>
      <div className='header__container container'>
        <div className='header__inner'>
          <Link className='header__logo' to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <div className='header__nav'>
            <ul className='header__nav-list'>
              <li className='header__nav-item'>
                <Link to='/' className='header__nav-link'>
                  <HomeIcon />
                  <span>Home</span>
                </Link>
              </li>
              <li className='header__nav-item'>
                <Link
                  to='/pokedex'
                  className='header__nav-link header__nav-link_active'
                >
                  <PokedexIcon />
                  <span>Pokedex</span>
                </Link>
              </li>
            </ul>
            <div className='header__nav-logo'>
              <img src={NavLogo} alt='logo' />
            </div>
          </div>
          <button className='header__nav-opener nav-opener' onClick={toggleNav}>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
