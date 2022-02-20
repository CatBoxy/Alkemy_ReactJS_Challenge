import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Styles = styled.div`
  .title {
    color: ${colors.secondary};
    font-family: 'Cormorant Upright';
    font-size: 2.75rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .link {
    margin-right: 1rem;
  }
`;