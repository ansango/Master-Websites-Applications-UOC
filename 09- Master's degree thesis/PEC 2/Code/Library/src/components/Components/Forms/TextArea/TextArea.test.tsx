/**
 * ?TextArea Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import TextArea, { TextAreaProps } from ".";
const mockSubmit = jest.fn();
describe("<TextArea />", () => {
  it("should render", () => {
    const props: TextAreaProps = {
      name: "textarea",
      label: "TextArea",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <TextArea {...props} />
      </Form>
    );
    expect(screen.getByText("TextArea")).toBeInTheDocument();
  });
});
