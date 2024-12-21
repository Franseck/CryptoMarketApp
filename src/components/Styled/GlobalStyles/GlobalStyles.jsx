import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    box-sizing : border-box ;
    margin : 0;
    }
    body{
    background-color: #564a3c;
    }
`;

export const breakpoints = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  };

  /* 
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    display: flex;
    flex-direction: column; 
}
    */