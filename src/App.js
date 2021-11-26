import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newColor)}
        disabled={disabled}>
        change to {newColor}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        onClick={() => setDisabled(!disabled)}></input>
    </div>
  );
}

export default App;
