import styled from "styled-components";

import WizardButton from "../components/WizardButton";

export default function DisplayError({ code, description }) {
  return (
    <>
      <StyledDisplayError>
        Error: <strong>{code}</strong>
        {description && <p>{description}</p>}
        <a className="btn" href="/">
          Continue
        </a>
      </StyledDisplayError>
    </>
  );
}

const StyledDisplayError = styled.div`
  font-size: 1rem;
  background: #fffb;
  position: absolute;
  bottom: 20%;
  left: 2em;
  right: 2em;
  padding: 2em;
  text-align: center;
  border-radius: 1em;

  .btn {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 18px;
    min-width: 120px;
    background: #e95454;
    color: white;
    padding: 0.5em;
    text-decoration: none;
    border-radius: 50px;
    display: inline-block;
    margin-top: 1em;
  }
`;
