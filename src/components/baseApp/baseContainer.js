import React from 'react';
import {Dashboard as Dash, Content} from './styles';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Colors} from '../../config/styles';

const {Dashboard: Base, HideShowMenu, HeaderDashboard} = Dash;

export default function BaseContainer(props) {
  return (
    <Base>
      <HeaderDashboard>
        <HideShowMenu onClick={props.hideOrShowMenu}>
          <FaIcon icon={faBars} color={Colors.sideBar} size='2x' style={{width: 20}} />
        </HideShowMenu>
      </HeaderDashboard>
      <Content>
      {props.children}
      </Content>
    </Base>
  );
}
