import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(({ text, className }) => {
  return (
    <div className={className}>
      {links.map((item, index) => (
        <FooterLink key={index} {...item} />
      ))}
    </div>
  );
})`
  display: flex;
  padding: 10px 0;
`;

const FooterLink = styled(({ className, label, iconClass, linkTo }) => (
  <Link to={linkTo} className={className}>
    <span className="icon">
      <i className={iconClass} />
    </span>
    <span className="label">{label}</span>
  </Link>
))`
  text-align: center;
  width: 25%;
  cursor: pointer;
  text-decoration: none;

  & + & {
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
