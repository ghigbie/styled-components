import styled from 'styled-components'

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${({red}) => red && 'red'};
  color: ${({blue}) => blue && 'blue'};
  color: ${({purple}) => purple && 'purple'};
`;

export default BasicTitle

