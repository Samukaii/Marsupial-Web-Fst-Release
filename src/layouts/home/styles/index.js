import styled from 'styled-components';
import {Colors} from '../../../config/styles';
import * as sideBar from './sideBar';
import * as dashBoard from './dashboard';

export const Background = styled.div`
  background-color: ${Colors.sideBar};
  height: 100%;
  width: 100%;
  display: flex;
  z-index: -1;
  overflow-x: hidden;
`;

export const {...SideBar} = sideBar;
export const {...Dashboard} = dashBoard;
