export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "20px",
    width: "250px",
    marginTop: "5px",
  };
  return <div style={styles}></div>;
}
