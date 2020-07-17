import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

export const HideFormButton = props => {
  const Style = styled.button`
    padding: 0;
    margin: 0;
    display: flex;
    background: #0000;
    border:0px;
    cursor: pointer;

    &:hover{
      color: red;
    }
    
  `;
  return (
    <Style onClick={props.onClick}>
      Fechar<FontAwesomeIcon icon={faAngleDown} style={{marginLeft:4}} />
    </Style>
  );
};
