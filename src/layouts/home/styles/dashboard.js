import styled from 'styled-components';
import {Colors} from '../../../config/styles';

export const Dashboard = styled.div`
  min-width: 100%;
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: ${Colors.background};
  box-shadow: -10px 0px 20px #1113;
  z-index: 0;
`;

export const SearchButton = styled.button`
  background-color: ${Colors.search};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 20px;
  &:hover {
    background-color: #36f5;
  }
`;

export const SearchBar = styled.form`
  box-shadow: 0px 5px 20px #1114;
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
  outline: none;
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
export const HeaderDashboard = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  height: 50px;
  z-index: 0;
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
  outline: none;

  &:hover {
    background-color: #36f5;
  }
`;
