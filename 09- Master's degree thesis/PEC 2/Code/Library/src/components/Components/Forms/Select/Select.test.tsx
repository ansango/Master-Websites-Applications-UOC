/**
 * ?Select Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import Select, { SelectProps } from ".";
const mockSubmit = jest.fn();
describe("<Select />", () => {
  it("should render", () => {
    const props: SelectProps = {
      name: "test",
      label: "test",
      data: [
        {
          value: "test",
          label: "test",
        },
      ],
    };

    render(
      <Form onSubmit={mockSubmit}>
        <Select {...props} />
      </Form>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
