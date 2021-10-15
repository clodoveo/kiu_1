import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ArticlesList({ data }) {
  return (
    <Styled>
      {data.map((article) => (
        <Link className="list-item" key={article.id} to={article.linkTo}>
          <img className="thumb" src={article.thumb} alt={article.title} />
          <div className="content">
            <div className="title">{article.title}</div>
            <div className="abstract">{article.abstract}</div>
          </div>
          <div className="icon">
            <i className="fas fa-chevron-right" />
          </div>
        </Link>
      ))}
    </Styled>
  );
}

const Styled = styled.div`
  .list-item {
    padding: 1.4em 1em;
    text-decoration: none;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;

    .thumb {
      border: 5px solid #eee;
      border-radius: 3px;
    }

    .content {
      padding: 0 21px;

      .title {
        font-weight: bold;
        font-size: 23px;
        line-height: 36px;
      }
    }

    .icon {
      color: #607464;
      padding: 0 0.5em;
    }
  }
`;
