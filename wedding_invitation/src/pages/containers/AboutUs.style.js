import styled from 'styled-components';
import groomnBride from '../../images/groomnBride.png';

export const AboutUsStyle = styled.div`
  img {
    max-width: 100%;
  }
  .photo {
    div {
      height: 8em;
      width: 8em;
      margin: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .groom {
      background: url(${groomnBride}) no-repeat center center;
    }
    .bride {
      background: url(${groomnBride}) no-repeat center center;
    }
  }
`;
