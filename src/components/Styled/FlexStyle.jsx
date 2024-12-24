import styled from 'styled-components';

export const FlexStyle = styled.div`
  display: flex;
  justify-content: ${({ center }) => center || "center"};
  align-items: center;
color: bisque;
  p {
    margin-left: 1rem;
    text-transform: uppercase;
  }
`;
