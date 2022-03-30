/**
 * ?Title Test
 */

import { render, screen } from "@testing-library/react";

import Title from ".";

describe("<Title />", () => {
  it("should render", () => {
    render(<Title title="Title"/>);
    expect(screen.getByText("Title")).toBeInTheDocument();
  })
})