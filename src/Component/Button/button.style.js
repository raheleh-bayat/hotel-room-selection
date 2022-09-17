import styled from "styled-components";

export const ButtonAdd = styled.button`
  width: 100%;
  height: 50px;
  background-color:  ${(props) => props.backgroundColor};
  border: 1px solid #eff2f6;
  border-radius: 5px;
  color: rgb(12, 99, 250);
  margin-top: ${(props) => props.marginTop};
`;
