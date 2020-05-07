import React from 'react';
import {Background, MenuNav, Container} from './styles';

export default function Home() {
  let menuActive = true;
  function toggleMenu() {
    if (menuActive) {
      //document.getElementById('menuNav').style.left = '-30px';
      document.getElementById('menuNav').style.width = '4%';
    } else {
      //document.getElementById('menuNav').style.left = '0px';
      document.getElementById('menuNav').style.width = '20%';
    }
    menuActive = !menuActive;
  }
  return (
    <Background>
      <MenuNav id='menuNav'>
        <button onClick={toggleMenu} style={{float: 'right'}}>
          Fechar
        </button>
      </MenuNav>
      <Container>Seja bem Vindo</Container>
    </Background>
  );
}
