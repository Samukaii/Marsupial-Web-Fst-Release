import {Background, Dashboard, SearchBar, ContentCard, HideShowMenu} from './styles/index';
import {SideBar, CardItem, InputSearch, SearchButton} from './styles/index';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useRef, useState} from 'react';
import {Colors} from '../../config/styles';
import NavMenus from './navigationMenus';
import {TweenLite} from 'gsap';

export default function Home() {
  let card = useRef(null);
  let navMenu = useRef(null);
  let sideBar = useRef(null);
  let labelItems = useRef(null);
  let menuItems = useRef(null);

  const [isShownMenu, setIsShownMenu] = useState(true);

  useEffect(() => {
    TweenLite.to(card, 2, {
      x: 50,
    });
    labelItems.current = sideBar.getElementsByClassName('Label');
    menuItems.current = sideBar.getElementsByClassName('MenuItem');
  }, []);
  function hideOrShowMenu() {
    if (isShownMenu) {
      setIsShownMenu(false);
      TweenLite.to(navMenu, 0.6, {
        x: -100,
      });
      TweenLite.to(labelItems.current, 0.3, {
        opacity: 0,
      });
      TweenLite.to(menuItems.current, 0.6, {
        x: -34,
      });
    } else {
      setIsShownMenu(true);
      TweenLite.to(navMenu, 0.6, {
        x: 0,
      });
      TweenLite.to(labelItems.current, 0.6, {
        opacity: 100,
      });
      TweenLite.to(menuItems.current, 0.6, {
        x: 0,
      });
    }
  }

  return (
    <Background>
      <SideBar ref={ref => (sideBar = ref)}>
        <NavMenus />
      </SideBar>
      <Dashboard ref={nav => (navMenu = nav)}>
        <HideShowMenu onClick={hideOrShowMenu}>
          <FaIcon icon={faBars} color={Colors.sideBar} size='2x' style={{width: 20}} />
        </HideShowMenu>
        <SearchBar>
          <InputSearch placeholder='Pesquise aqui...' />
          <SearchButton>
            <FaIcon icon={faSearch} color={Colors.sideBar} />
          </SearchButton>
        </SearchBar>
        <ContentCard ref={el => (card = el)}>
          <CardItem> Linguagens e suas Tecnologias</CardItem>
          <CardItem> Ciências Humanas</CardItem>
        </ContentCard>
        <ContentCard ref={el => (card = el)}>
          <CardItem> Matemática</CardItem>
          <CardItem> Redação</CardItem>
        </ContentCard>
      </Dashboard>
    </Background>
  );
}
