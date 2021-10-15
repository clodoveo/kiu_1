import styled from "styled-components";

export default function LoadingSpinner() {
  return (
    <Spinner className="green-text">
      <i className="fas fa-spinner fa-spin" />
    </Spinner>
  );
}

const Spinner = styled.div`
  text-align: center;
  font-size: 2em;
  padding: 1rem;
`;
