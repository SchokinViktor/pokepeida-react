import React from "react";

import FooterLogo from "../../assets/images/logo-footer.svg";
import GithubIcon from "../../components/icons/GithubIcon";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__img-holder'>
          <img src={FooterLogo} alt='logo' />
        </div>
        <ul className='footer__social-media-list'>
          <li className='footer__social-media-item'>
            <a
              href='https://github.com/SchokinViktor'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon color='#444444' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
