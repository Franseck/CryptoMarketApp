import styled from "styled-components";

const WrapperStyle = styled.div`
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    & th:nth-of-type(1),
    & td:nth-of-type(1),
    & th:nth-of-type(2),
    & td:nth-of-type(2) {
      display: none;
    }
  }

  table {
    margin: 0.5rem 0;
  }

  td,
  th {
    padding: 2px;
    text-align: center;
  }

  th {
    background-color: #416161;
  }

  td,
  th {
    padding: 0.4rem;
  }
`;

export default WrapperStyle;