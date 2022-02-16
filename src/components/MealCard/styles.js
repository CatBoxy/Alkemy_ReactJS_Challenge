import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Styles = styled.div`
  .card {
    color:${colors.secondary};
    border: solid 1px ;
    border-color: ${props => (props.children[0].props.veganProp) ? colors.vegan : colors.primary};
    border-radius: 0;
    background-color: transparent;
    min-height: ${props => (props.children[0].props.screenProp === 'dishes') && '420px'};
    flex-direction: ${props => (props.children[0].props.screenProp === 'menu') && 'row'};
  }

  .cardBody {
    text-align: left;
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cardBottom {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .image {
    background-color: transparent;
  }

  .title {
    font-family:'Cormorant Upright';
    font-weight: bold;
  }

  .cardSubtitle {
    color: ${colors.vegan}
  }

`;