import styled from "styled-components";

export default function ({ children }) {
  return <MenuHeader className="title">{children}</MenuHeader>;
}

const MenuHeader = styled.div`
  text-align: center;
  margin: 1em 15px;
  font-size: 27px;
  padding-bottom: 0.2em;
  border-bottom: 1px solid #ccc;
`;
