/**
 * ?Switch Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import Switch, { SwitchProps } from ".";
const mockSubmit = jest.fn();
describe("<Switch />", () => {
  it("should render", () => {
    const props: SwitchProps = {
      name: "test",
      label: "test",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <Switch {...props} />
      </Form>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
