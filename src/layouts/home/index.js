import Dashboard from './dashboard';
import {Background} from './styles/index';
import React, {useEffect, useRef, useState} from 'react';
import SideBar from './sideBar';
import {TweenLite} from 'gsap';

export default function Home() {
  let card = useRef(null);
  let sideBar = useRef(null);
  let labelItems = useRef(null);

  const [isExpandedMenu, setIsExpandedMenu] = useState(true);

  useEffect(() => {
    TweenLite.to(card.current, 2, {
      x: 50,
    });
    labelItems.current = sideBar.current.getElementsByClassName('Label');
  }, []);
  function hideOrShowMenu() {
    isExpandedMenu ? retractMenu() : expandMenu();
  }

  function retractMenu() {
    setIsExpandedMenu(false);
    TweenLite.to(labelItems.current, 0.6, {
      opacity: 0,
      width: 0,
    });
  }
  function expandMenu() {
    setIsExpandedMenu(true);
    TweenLite.to(labelItems.current, 0.6, {
      opacity: 100,
      width: 100,
    });
  }

  return (
    <Background>
      <SideBar reference={sideBar} />
      <Dashboard hideOrShowMenu={hideOrShowMenu} card={card} />
    </Background>
  );
}
