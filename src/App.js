import { useState } from "react";

export function replaceCamelCaseWithSpaces(colorName) {
  let replace = colorName.replace(/\B([A-Z])\B/g, " $1");
  return replace.split(" ").length < 3
    ? replace
    : replace
        .split(" ")
        .filter((a, i) => i != 1)
        .join(" ");
}
function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: !disabled ? buttonColor : "gray" }}
        onClick={() => setButtonColor(newColor)}
        disabled={disabled}>
        change to {newColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        name="Disable button"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
