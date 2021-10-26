import { useHistory } from 'react-router-dom'
import styled from "styled-components";

export default function({ text, backToTarget }) {
  backToTarget = backToTarget || "/menu"

  return (
    <ScreenHeader>
      <span className="title">
        <BackButton backTo={backToTarget} />
        {text}
      </span>
    </ScreenHeader>
  );
}

const ScreenHeader = styled.div`
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

const BackButton = styled(({ backTo }) => {
  const history = useHistory();

  return (
    <span className="back" onClick={handleClick}>
      <i className="fas fa-chevron-left" />
    </span>
  )

  function handleClick() {
    history.push(backTo)
  }
})`
`
