import { Link } from "react-router-dom";
import styled from "styled-components";

const links = [
  {
    label: "Raggiungi",
    iconClass: "fas fa-location-arrow",
    linkTo: "/video"
  },
  {
    label: "Info",
    iconClass: "fas fa-info-circle",
    linkTo: "/info"
  },
  {
    label: "Servizi",
    iconClass: "fas fa-umbrella-beach",
    linkTo: "/services"
  },
  {
    label: "Chat",
    iconClass: "fas fa-comment",
    linkTo: "/chat"
  }
];

export default function ScreenFooter() {
  return (
    <Styled>
      {links.map(({ linkTo, iconClass, label }, index) => (
        <Link key={index} to={linkTo}>
          <span className="icon">
            <i className={iconClass} />
          </span>
          <span className="label">{label}</span>
        </Link>
      ))}
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  padding: 10px 0;
  background: #fff;
  margin-top: 1em;

  a {
    text-align: center;
    width: 25%;
    text-decoration: none;
  }

  a + a {
    border-left: 1px solid #ccc;
  }

  .icon {
    color: #265a32;
    display: block;
    font-size: 27px;
  }
  .label {
    font-size: 14px;
    color: #607464;
  }
`;
