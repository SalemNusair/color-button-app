import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test("Button has correct initial color",()=>{
  render(<App/>);
  const buttonColorElement=screen.getByRole("button",{name:"change to blue"});
  expect(buttonColorElement).toHaveStyle({backgroundColor:"red"});
  fireEvent.click(buttonColorElement);
  expect(buttonColorElement).toHaveStyle({backgroundColor:"blue"});
  expect(buttonColorElement.textContent).toBe("change to red");

})

