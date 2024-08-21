import { useEffect, useState } from "react"

import Aos from  "aos";
import "aos/dist/aos.css";

import SocialMediaListItem from './SocialMediaListItem';
import NavigationMenuListItem from './NavigationMenuListItem';

import { data } from '../data';

export default function Header() {

  useEffect(() => {
    Aos.init({ duration: 2500 });
  })

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }

  return (
    <header className="header">
      <div className="container">
        <div data-aos="fade" className="container__img">
          <img className="header__profile-photo"
            src="https://avatars.githubusercontent.com/u/78735609?v=4" 
            alt="@harpreetkaur"
          />
        </div>
      </div>
      <p data-aos="fade" className="header__name">
       Harpreet Kaur
        <span className="header__role">
        Software Developer 
        </span>
      </p>
      <div className="container side-menu">
        <ul className="header__list__social-media">
          {
            data.socialMediaList.map((item, index) => {
              return (
                <SocialMediaListItem 
                  key={index}
                  icon={item.icon}
                  url={item.url}
                  alt={item.alt}
                />
              )
            })
          }
        </ul>
        <ul className={`header__list__sections ${isOpen ? "active" : "" }`}>
          {
            data.navigationMenuList.map((item, index) => {
              return (
                <NavigationMenuListItem 
                  toggleMenu={toggleMenu}
                  key={index}
                  href={item.href}
                  sectionName={item.sectionName}
                />
              )
            })
          }
        </ul>
      </div>
      <div onClick={toggleMenu} className={`header__mobile-menu ${isOpen ? "active" : "" }`}>
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>
      </div>
    </header>
  );
}