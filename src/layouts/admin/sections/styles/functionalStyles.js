import {faPen, faPlus, faTrash, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

export const Edit = props => {
  const Style = styled.button`
    padding: 7px;
    margin: auto;
    display: auto;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: ${props.color ? props.color + '5' : '#3335'};
    }
  `;
  return (
    <Style>
      <FontAwesomeIcon icon={faPen} color={props.color || '#333'} />
    </Style>
  );
};

export const Delete = props => {
  const Style = styled.button`
    padding: 7px;
    margin: auto;
    display: auto;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: ${props.color ? props.color + '5' : '#f225'};
    }
  `;
  return (
    <Style>
      <FontAwesomeIcon icon={faTrash} color={props.color || '#f22'} />
    </Style>
  );
};

export const Add = props => {
  const Style = styled.button`
    padding: 10px;
    width: 100%;
    margin-top: 10px;

    background-color: ${props.color || '#f53'};
    border: none;
    cursor: pointer;
    color: ${props.textColor || '#eee'};
  `;
  return (
    <Style onClick={props.onClick}>
      {props.children}{' '}
      <FontAwesomeIcon style={{marginLeft: 5}} icon={faPlus} color={props.colorIcon || '#eee'} />
    </Style>
  );
};
