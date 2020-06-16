import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

export const HideFormButton = props => {
  const Style = styled.button`
    padding: auto;
    margin: auto;
    display: flex;
    width: 100%;
    
  `;
  return (
    <Style onClick={props.onClick}>
      <FontAwesomeIcon icon={faAngleDown} />
    </Style>
  );
};
