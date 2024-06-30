import { useEffect, useState } from "react";
export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);
    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateRandomHexColor();
    } else {
      handleCreateRandomRgbColor();
    }
  }, [typeOfColor]);
  return (
    <div
      className="text-center "
      style={{ backgroundColor: color, width: "100vw", height: "100vh" }}
    >
      <button
        onClick={() => setTypeOfColor("hex")}
        className="px-2 m-2 text-white border-2 border-solid rounded-md border-l-stone-400 "
      >
        Create HEX Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        className="px-2 m-2 text-white border-2 border-solid rounded-md border-l-stone-400"
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="px-2 m-2 text-white border-2 border-solid rounded-md border-l-stone-400"
      >
        Generate Random Color
      </button>
      <div className="flex items-center justify-center mt-12 text-6xl text-white">
        <h3>{typeOfColor === "rgb" ? "" : "HEX"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
