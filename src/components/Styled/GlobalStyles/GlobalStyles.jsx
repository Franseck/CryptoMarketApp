import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
    box-sizing : border-box ;
    margin : 0;
    }
    body{
    background-color: #2f3f45;
    }
    p{
    line-height:2;
    opacity: 0.7;
}
a{
    color:  #f4f4f4;
    text-decoration:none
}
h1{
    text-align:center;
    margin:1rem;
      color:#4993ac;;
    font-family: "Nothing You Could Do"
}
    h2{
     font-family: "Fredericka the Great";
        text-align:center;
    margin:1rem;
    color:#4993ac;;
    }
    span{
      color:bisque;
    }
`;

export const breakpoints = {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  };

  //Media
  /* 
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    display: flex;
    flex-direction: column; 
}    */


//Fonts
/*
 font-family: "Fredericka the Great",
font-family: "Nothing You Could Do"
font-family: "Special Elite"
font-family: "Wallpoet"
*/ 