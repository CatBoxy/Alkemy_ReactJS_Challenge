import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Input = styled.input`
  border: 1px solid ${colors.primary};
  background-color: transparent;
  padding: 1rem 0 1rem 1.5rem;
  font-family: 'Cormorant Upright';
  font-weight: 600;
  color: grey;
  min-width: 250px;
  ${media.mobileL}{
    width: 380px;
  }
`;

export const InputWrapper = styled.div`
  text-align: left;
  color: ${colors.error};
  min-height: 5.125rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0 1rem;
`;