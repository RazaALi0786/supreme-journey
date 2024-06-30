import { useState } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function handleCreateRandomHexColor() {}
  function handleCreateRandomRgbColor() {}
  return (
    <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
