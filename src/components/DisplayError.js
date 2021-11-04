import styled from "styled-components"

export default function DisplayError({ code, description }) {
  return (
    <StyledDisplayError>
      Error: <strong>{code}</strong>
      {description && <p>{description}</p>}

      {code === "token is required" && (
        <p>
          <a href="/?token=f4b226aa068039e8d045a8100d03b4989d63ffd1">
            reload
          </a>
        </p>
      )}
    </StyledDisplayError>
  )
}

const StyledDisplayError = styled.div `
  font-size: 1rem;
  background: #fffb;
  position: absolute;
  bottom: 20%;
  left: 2em;
  right: 2em;
  padding: 3em;
  text-align: center;
  border-radius: 1em;
`