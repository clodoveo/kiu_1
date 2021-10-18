import styled from "styled-components";

export default function ({ children }) {
  return <MenuHeader className="title">{children}</MenuHeader>;
}

const MenuHeader = styled.div`
  text-align: center;
  margin: 1em 0;
  font-size: 27px;
  padding-bottom: 1em;
  border-bottom: 1px solid #ccc;
`;
