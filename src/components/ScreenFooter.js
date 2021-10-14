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
      {links.map((item) => (
        <FooterLink>{item.label}</FooterLink>
      ))}
    </div>
  );
})`
  display: flex;
`;

const FooterLink = styled.div`
  padding: 2em;
`;
