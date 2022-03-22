import styled from "styled-components";

export default function ({ title, content }) {
  return (
    <ToastMessage className="content">
      <div className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
    </ToastMessage>
  );
}

const ToastMessage = styled.div`
  margin: 1em;
  padding: 1em;
  background: #2aaa46;
  border-radius: 1em;
  color: #fff;

  .title {
    color: inherit;
    font-size: 23px;
  }
`;
