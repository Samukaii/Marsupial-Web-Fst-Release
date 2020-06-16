import React from 'react';
import Sidebar from './sideBar';
import BaseContainer from './baseContainer';
import {Background} from './styles';

export default function({reference, children, hideOrShowMenu, card}) {
  return (
    <Background>
      <Sidebar reference={reference} />
      <BaseContainer hideOrShowMenu={hideOrShowMenu} card={card}>
        {children}
      </BaseContainer>
    </Background>
  );
}
