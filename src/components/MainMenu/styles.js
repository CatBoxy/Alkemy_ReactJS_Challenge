import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Styles = styled.div`
  .mainContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .menuContainer {
    max-width: 1200px;
    background: ${colors.tertiary};
    border: solid 1px;
    border-color: rgba(220, 202, 135, 0.3);
  }
  /* .cardsContainer {
    padding: 1rem,
  } */
  .title {
    font-family: 'Cormorant Upright';
  }
  .menuFooter {
    display: flex;
    justify-content: space-between;
    border-top: solid 1px rgba(220, 202, 135, 0.3);
    margin-top: 1rem;
  }
  
  .dataContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 1rem;
  }
  .emptyMenu {
    padding: 0 1rem 0 1rem;
  }
`;