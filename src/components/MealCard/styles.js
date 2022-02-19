import styled from 'styled-components';
import { media } from '../../styles/media/media';
import { colors } from '../../styles/colors/colors';

export const Styles = styled.div`

  min-width: ${props => (props.children[0].props.screenProp === 'menu') && '333px'};
  
  .card {
    color:${colors.secondary};
    border: solid 1px ;
    border-color: ${props => (props.children[0].props.veganProp) ? colors.vegan : colors.primary};
    border-radius: 0;
    background-color: transparent;
    min-height: ${props => (props.children[0].props.screenProp === 'dishes') ? '420px' : '440px'};
    max-height: ${props => (props.children[0].props.screenProp === 'menu') && '440px'};
  }

  .cardBody {
    text-align: left;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;