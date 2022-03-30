/**
 * ?Input Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import Input, { InputProps } from ".";
const mockSubmit = jest.fn();
describe("<Input />", () => {
  it("should render", () => {
    const props: InputProps = {
      type: "text",
      name: "text",
      label: "Text",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <Input {...props} />
      </Form>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
