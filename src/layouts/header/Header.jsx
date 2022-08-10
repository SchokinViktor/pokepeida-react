import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/images/logo-header.png";
import NavLogo from "../../assets/images/logo-footer.svg";
// import HomeIcon from "../../components/icons/HomeIcon";
import PokedexIcon from "../../components/icons/PokedexIcon";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleNav = () => {
    setActive(!active);
  };

  const closeNav = () => {
    setActive(false);
  };

  return (
    <header className={active ? "header header_active" : "header"}>
      <div className='header__container container'>
        <div className='header__inner'>
          <NavLink className='header__logo' to='/' onClick={closeNav}>
            <img src={Logo} alt='logo' />
          </NavLink>
          <div className='header__nav'>
            <ul className='header__nav-list'>
              {/* <li className='header__nav-item'>
                <NavLink className='header__nav-link' to='/' onClick={closeNav}>
                  <HomeIcon className="header__link-icon" />
                  Home
                </NavLink>
              </li> */}
              <li className='header__nav-item'>
                <NavLink
                  className='header__nav-link'
                  to='/'
                  onClick={closeNav}
                >
                  <PokedexIcon className='header__link-icon' />
                  Pokedex
                </NavLink>
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
