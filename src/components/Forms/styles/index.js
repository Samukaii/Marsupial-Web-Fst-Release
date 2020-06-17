import styled from 'styled-components';
import {HideFormButton as HideButton} from './functionalStyles';

export const HideFormButton = HideButton;
export const CollapseForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  padding-top: 10px;
  width:100%;
  height: 0px;
  background-color:#2232;
  transform: scaleY(0);
  align-items: center;
`;
