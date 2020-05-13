import styled from 'styled-components';
import {Colors} from '../../../config/styles';

export const Background = styled.div`
  background-color: ${Colors.sideBar};
  height: 100%;
  width: 100%;
  display: flex;
  z-index: -1;
  overflow-x: hidden;
`;

export const Dashboard = styled.div`
  min-width: 100%;
  margin: 5 auto;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: ${Colors.background};
  box-shadow: -10px 0px 20px #1113;
`;

export const SideBar = styled.div`
  width: 15%;
  height: 100%;
  position: relative;
  background-color: ${Colors.sideBar};
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const NavMenus = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 5%;
  width: 100%;
`;
export const NavMenuItems = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const LabelMenuItems = styled.div`
  color: #eee;
  font-size: 10pt;
  text-align: center;
  height: 13px;
`;
export const MenuIcon = styled.div`
  color: #eee;
  margin-right: 5px;
`;

export const SearchButton = styled.button`
  background-color: ${Colors.search};
  border: none;
`;

export const SearchBar = styled.form`
  box-shadow: 0px 0px 5px #111;
  border-radius: 25px;
  background-color: ${Colors.search};
  width: 260px;
  padding: 8px;
  margin-left: 10px;
  margin-top: 5px;
  display: flex;
`;

export const InputSearch = styled.input`
  border-radius: 25px;
  width: 100%;
  border: none;
  background-color: ${Colors.search};
`;

export const ContentCard = styled.div`
  margin-top: 40px;
  align-items: center;
  float: left;
`;

export const CardItem = styled.div`
  margin: 20px;
  width: 300px;
  height: 150px;
  background-color: #fff;
  padding: 10px;
  border-radius: 20px;
  z-index: 1;
`;

export const HideShowMenu = styled.button`
  background-color: #0000;
  height: 40px;
  width: 40px;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff3;
  }
`;
