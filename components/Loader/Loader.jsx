export default function Loader() {
  const load = {
    width: "10px",
    height: "10px",
    border: "3px solid #0b1e30",
    borderBottomColor: "transparent",
    borderRadius: "50%",
    margin: "0 auto",
    animation: "rotation 1s linear infinite",
  };

  return <div style={load}></div>;
}
