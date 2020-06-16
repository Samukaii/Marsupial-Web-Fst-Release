import styled from 'styled-components';
import {Colors} from '../config/styles';

export const Logo = styled.h3`
  width: 300px;
  text-align: center;
`;
export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #eee;
`;

export const Form = styled.form`
  width: 340px;
  height: 450px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;
export const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  outline: none;
`;
export const ActionButton = styled.button`
  padding: 10px;
  height: 50px;
  font-size: 12pt;
  margin-top: 10px;
  background-color: ${Colors.button};
  font-weight: bold;
  color: ${Colors.lightText};
  border: none;
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${Colors.themedText};
  margin: 10px;
  font-size: 11pt;
  text-align: center;
`;
