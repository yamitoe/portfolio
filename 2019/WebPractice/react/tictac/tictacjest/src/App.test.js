import React from 'react';
import { render, fireEvent, findAllByTitle } from '@testing-library/react';
import App from './App';


it("renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it("has Undo", ()=>{
  const { getByText } = render(<App />);
  const undoBtn = getByText("Undo");
})

it("has Redo", ()=>{
  const { getByText } = render(<App />);
  const undoBtn = getByText("Undo");

})

it("fires button", ()=>{
  const { getByText } = render(<App />);
  fireEvent.click(getByText("Undo"));
})