import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Must be fetching data", () => {
  render(<App />);
  const featuredBooks = screen.queryByText(/Featured Books/i);
  const allBooks = screen.queryByText(/All Books/i);
  expect(featuredBooks).toBeNull();
  expect(allBooks).toBeNull();
});

test("Cart Must be empty", () => {
  render(<App />);
  const emptyCartText = screen.getByText("No Item in cart");
  expect(emptyCartText).toBeInTheDocument();
});

test("Logo render successfully", () => {
  render(<App />);
  const quidaxLogo = screen.getByTestId("quidax-logo");
  expect(quidaxLogo).toBeInTheDocument();
});

test("Render the correct page title", () => {
  render(<App />);
  expect(global.window.document.title).toBe("Home | Quidax Books");
});
