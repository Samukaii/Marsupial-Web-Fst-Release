import styled from 'styled-components';
import {HideFormButton as HideButton} from './functionalStyles';

export const HideFormButton = HideButton;
export const CollapseForm = styled.form`
  padding: auto;
  margin: auto;
  display: flex;
  flex-direction: column;

  transform: scaleY(0);
`;
