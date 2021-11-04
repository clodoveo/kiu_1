export default function DisplayError({ code, description }) {
  return (
    <div style={{fontSize: "1rem"}}>
      Error: <strong>{code}</strong>
      {description && <p>{description}</p>}
    </div>
  )
}