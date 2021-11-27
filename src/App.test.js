import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {replaceCamelCaseWithSpaces} from"./App";

test("Button has correct initial color", () => {
  // to render the App component
  render(<App />);
  // getByRole it has the first argument is html tag and the second element is obj which normal the prop for tag
  // `name` is the text between button
  const buttonColorElement = screen.getByRole("button", {
    name: "change to blue",
  });
  // expect is a assertion which hav toHaveStyle which use to check if the background of the button has red color
  // otherwise it will fail
  expect(buttonColorElement).toHaveStyle({ backgroundColor: "red" });
  // `fireEvent` it uses for events as the shown below as well the rest code below is used when the button clicked
  fireEvent.click(buttonColorElement);
  expect(buttonColorElement).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonColorElement.textContent).toBe("change to red");
});
test("intial check", () => {
  render(<App />);
  // check if the button is enabled
  const buttonColor = screen.getByRole("button", { name: "change to blue" });
  expect(buttonColor).toBeEnabled();
  // find checbox
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("test checkbox", () => {
  render(<App />);
  const buttonColor = screen.getByRole("button");
  const checkcbox = screen.getByRole("checkbox",{name:"Disable button"});
  
// change color to gray when checked
  fireEvent.click(checkcbox);
  expect(buttonColor).toHaveStyle({backgroundColor:"gray"});
  expect(checkcbox).toBeChecked();
  expect(buttonColor).toBeDisabled();
// re-checked to red
  fireEvent.click(checkcbox);
  expect(buttonColor).toHaveStyle({backgroundColor:"red"});
});

describe("replace camel case with space test",()=>{
  test("work with no inner camel case",()=>{
expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("Work for one inner camel case",()=>{
    expect(replaceCamelCaseWithSpaces("RedBlue")).toBe("Red Blue");
  });
  test("works for multiple camel case",()=>{
    expect(replaceCamelCaseWithSpaces("RedBlueGreen")).toBe("Red Green");
  });
})


