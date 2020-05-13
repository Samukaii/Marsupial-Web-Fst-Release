import {faHome, faAtom, faCog, faChartLine as faChart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {Colors} from '../../config/styles';
import React from 'react';
import {NavMenus, NavMenuItems as Items, LabelMenuItems as LabelItem, MenuIcon} from './styles/';

export default function NavigationMenus() {
  return (
    <NavMenus>
      <Items className='MenuItem'>
        <MenuIcon>
          <FaIcon icon={faHome} color={Colors.background} size='2x' style={{width: 30}} />
        </MenuIcon>
        <LabelItem className='Label'>Home</LabelItem>
      </Items>
      <Items className='MenuItem'>
        <MenuIcon>
          <FaIcon icon={faAtom} color={Colors.background} size='2x' style={{width: 30}} />
        </MenuIcon>
        <LabelItem className='Label'>Matérias</LabelItem>
      </Items>
      <Items className='MenuItem'>
        <MenuIcon>
          <FaIcon icon={faChart} color={Colors.background} size='2x' style={{width: 30}} />
        </MenuIcon>
        <LabelItem className='Label'>Desempenho</LabelItem>
      </Items>
      <Items className='MenuItem'>
        <MenuIcon>
          <FaIcon icon={faCog} color={Colors.background} size='2x' style={{width: 30}} />
        </MenuIcon>
        <LabelItem className='Label'>Configurações</LabelItem>
      </Items>
    </NavMenus>
  );
}
