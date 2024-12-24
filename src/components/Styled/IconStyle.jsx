import styled from 'styled-components';

const IconStyle = styled.div`
font-size: ${({ rank }) => (rank ? "2rem" : "3rem")};
color: ${({ rank }) => (rank || "red")};
`;

export default IconStyle;