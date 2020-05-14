import styled from 'styled-components';
import {Colors} from '../../../config/styles';

export const SideBar = styled.div`
  height: 100%;
  background-color: ${Colors.sideBar};
  display: flex;
  padding-left: 1%;
  padding-right: 1%;
  align-items: center;
  flex-direction: row;
  z-index: 0;
`;

export const NavMenus = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const NavMenuItems = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  background-color: #0000;
  cursor: pointer;
  border-radius: 17px;
  padding: 6px;
  outline: none;

  transition: background-color 0.4s ease;

  &:hover {
    background-color: #fff4;
  }
`;
export const LabelMenuItems = styled.div`
  color: #eee;
  font-size: 10pt;
  text-align: left;
  height: 13px;
`;
export const MenuIcon = styled.div`
  color: #eee;
  margin-right: 5px;
`;
