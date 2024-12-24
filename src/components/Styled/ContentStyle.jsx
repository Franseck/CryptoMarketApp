import styled from "styled-components";


export const ContentStyle = styled.div`
  max-width: ${ ({header}) => (header || "600px")} ;
  margin: 1rem auto;
  padding: .7rem 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  background-color:#162933;
  box-shadow: 0px 0px 12px #586785;

  border-radius: 12px;
  @media screen and (max-width: 768px) {
   max-width: 360px;
  }
`;
