import {Dashboard as Dash} from './styles/index';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faBars} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {Colors} from '../../config/styles';

const {CardItem, InputSearch, SearchButton, Dashboard: Base} = Dash;
const {SearchBar, ContentCard, HideShowMenu, HeaderDashboard} = Dash;

export default function Dashboard(props) {
  return (
    <Base>
      <HeaderDashboard>
        <HideShowMenu onClick={props.hideOrShowMenu}>
          <FaIcon icon={faBars} color={Colors.sideBar} size='2x' style={{width: 20}} />
        </HideShowMenu>
        <SearchBar>
          <InputSearch placeholder='Pesquise aqui...' />
          <SearchButton>
            <FaIcon icon={faSearch} color={Colors.sideBar} />
          </SearchButton>
        </SearchBar>
      </HeaderDashboard>

      <ContentCard ref={props.card}>
        <CardItem> Linguagens e suas Tecnologias</CardItem>
        <CardItem> Ciências Humanas</CardItem>
      </ContentCard>
      <ContentCard ref={props.card}>
        <CardItem> Matemática</CardItem>
        <CardItem> Redação</CardItem>
      </ContentCard>
    </Base>
  );
}
