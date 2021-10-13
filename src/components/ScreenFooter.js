import styled from "styled-components";

export default styled(({ text, className }) => {
  const links = [
    {
      label: "Raggiungi"
    },
    {
      label: "Info"
    },
    {
      label: "Servizi"
    },
    {
      label: "Chat"
    }
  ];
  return (
    <div className={className}>
      {links.map((item, index) => (
        <FooterLink key={index}>{item.label}</FooterLink>
      ))}
    </div>
  );
})`
  display: flex;
`;

const FooterLink = styled.div`
  flex: 25;
  text-align: center;
  font-size: 14px;
  padding: 2em 0;
  cursor: pointer;
`;
