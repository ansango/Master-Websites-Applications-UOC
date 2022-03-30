/**
 * ?File Test
 */

import { render, screen } from "@testing-library/react";
import { Form } from "..";
import File, { FileProps } from ".";

const mockSubmit = jest.fn();

describe("<File />", () => {
  it("should render", () => {
    const props: FileProps = {
      name: "file",
      label: "File",
    };
    render(
      <Form onSubmit={mockSubmit}>
        <File {...props} />
      </Form>
    );
    expect(screen.getByText("File")).toBeInTheDocument();
  });
});
