import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Styles = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
  .menuCol {
    display: flex;
    justify-content: center;
  }
`;

export const MenuContainer = styled.div`
  max-width: 1200px;
  background: ${colors.tertiary};
  border: solid 1px;
  border-color: rgba(220, 202, 135, 0.3);
  width: 290px;
  margin-bottom: 2rem;
  ${media.mobileL} {
    width: 390px
  }
  ${media.tablet} {
    width: 720px;
  }
`;

export const Title = styled.h1`
  font-family: 'Cormorant Upright';
`;

export const MenuBody = styled.div`
  padding: 0 .75rem;
`;

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: solid 1px rgba(220, 202, 135, 0.3);
  margin-top: 1.5rem;
  ${media.tablet}{
    flex-wrap: nowrap;
  }
`;

export const MenuData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 1rem;
  flex: 1 1 15%;
`;

export const EmptyMenu = styled.div`
  padding: 0 1rem 0 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  ${media.tablet} {
    width: inherit;
  }
`;