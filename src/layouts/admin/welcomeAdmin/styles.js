import styled from 'styled-components';
import {Colors} from '../../../config/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BigTitle = styled.h1`
  color: ${Colors.themedText};
`;
export const Text = styled.p`
  color: ${Colors.themedText};
  padding: 30px;
`;
