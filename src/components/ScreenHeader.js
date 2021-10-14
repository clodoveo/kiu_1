import styled from "styled-components";

export default function ScreenHeader({ text }) {
  const historyBack = () => {
    window.history.back();
  };

  return (
    <Styled>
      <span className="title">
        <span className="back" onClick={historyBack}>
          <i className="fas fa-chevron-left" />
        </span>
        {text}
      </span>
    </Styled>
  );
}

const Styled = styled.div`
  position: relative;
  padding: 1em 0;
  font-size: 27px;
  text-align: center;
  background: #fff;

  & .title {
    font-size: 27px;
  }

  & .back {
    cursor: pointer;
    position: absolute;
    left: 15px;
    width: 38px;
    padding-top: 2px;
  }
`;
