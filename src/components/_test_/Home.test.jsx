import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

describe("Home", () => {
  test("Home is being rendered correctly", () => {
    const container = document.createElement("div");
    render(
      <BrowserRouter basename="/">
        <Home />
      </BrowserRouter>,
      container
    );
    const headings = screen.getAllByRole("heading");
    const paragraphs = screen.getAllByText(/Lorem ipsum/);
    
    expect(headings.length).toBeGreaterThan(0);
    expect(paragraphs.length).toBeGreaterThan(0);
  });
});

describe("Home Snapshot", () => {
  test("Home matches DOM snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter basename="/">
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
