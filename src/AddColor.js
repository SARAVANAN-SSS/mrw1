import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("gold");
  const [colorList, setColorList] = useState(["teal", "green", "crimson"]);

  const styles2 = { backgroundColor: color };
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles2}
        placeholder="Enter a Color"
      />
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>
      {colorList.map((color) => (
        <ColorBox color={color} />
      ))}
    </div>
  );
}
