import styled from 'styled-components';

const IconStyle = styled.div`
font-size: ${({ rank }) => (rank ? "2rem" : "4rem")};
color: ${({ rank }) => (rank || "GOLD")};
display: flex;
flex-wrap: wrap;
align-items: center;


`;

export default IconStyle;