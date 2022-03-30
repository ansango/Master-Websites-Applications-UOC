/**
 * ?Checkbox Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import Checkbox, { CheckboxProps } from ".";

const mockSubmit = jest.fn();

describe("<Checkbox />", () => {  
  it("should render", () => {
    const props: CheckboxProps = {
      name: "test",
      label: "test",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <Checkbox {...props} />
      </Form>
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
