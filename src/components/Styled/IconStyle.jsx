import styled from 'styled-components';

const IconStyle = styled.div`
font-size: ${({ rank }) => (rank ? "2rem" : "3rem")};
color: ${({ rank }) => (rank || "GOLD")};
display: flex;
gap: 1rem;
`;

export default IconStyle;