import styled from "styled-components";

export default styled(({ text, className }) => {
  const historyBack = () => {
    window.history.back();
  };

  return (
    <div className={className}>
      <span className="title">
        <span className="back" onClick={historyBack}>
          <i className="fas fa-chevron-left" />
        </span>
        {text}
      </span>
    </div>
  );
})`
  position: relative;
  padding: 1em 0;
  font-size: 27px;
  text-align: center;

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
