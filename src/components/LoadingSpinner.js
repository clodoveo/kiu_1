import styled from "styled-components";

export default function LoadingSpinner({ className }) {
  className += " green-text"

  return (
    <Spinner className={className}>
      <i className="fas fa-spinner fa-spin" />
      <span>loading</span>
    </Spinner>
  );
}

const Spinner = styled.div `
  text-align: center;
  font-size: 32px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 2em;

  &.is-white {
    color: #fffa;
  }

  >span {
    font-size: 0.5em;
  }
`;