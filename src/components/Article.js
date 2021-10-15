import styled from "styled-components";

export default function Service({ title, picture, content }) {
  return (
    <Styled>
      {picture && (
        <div className="picture">
          <img src={picture} alt={title} />
        </div>
      )}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </Styled>
  );
}

const Styled = styled.div`
  .picture {
    text-align: center;
  }
  .content {
    padding: 1em 2em;

    h2 {
    }
  }
`;
