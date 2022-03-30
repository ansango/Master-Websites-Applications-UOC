/**
 * ?Modal Test
 */

import { fireEvent, queryByTestId, render } from "@testing-library/react";

import Modal, { ModalProps } from ".";
import { Button } from "../../Buttons";

const props: ModalProps = {
  opened: true,
  element: <Button label="Test" />,
};

const props2: ModalProps = {
  opened: false,
  element: <Button label="Test" />,
};

describe("<Modal />", () => {
  it("should render", () => {
    render(<Modal {...props} />);
  });

  it("should render with opened false", () => {
    render(<Modal {...props2} />);
  });

  it("should render with children", () => {
    const { container } = render(<Modal {...props} />);
    expect(container.firstChild).toHaveClass("flex");
  });
  it("should open modal with open-modal-button", () => {
    const { container } = render(<Modal {...props2} />);
    const button = queryByTestId(container, "open-modal-button");
    expect(button).toBeTruthy();
    button && fireEvent.click(button);
    expect(container.firstChild).toHaveClass("flex");
  });
  it("should close modal on close button", () => {
    const { container } = render(<Modal {...props} />);
    const closeButton = queryByTestId(container, "close-button");
    expect(closeButton).toBeTruthy();
    closeButton?.click();
    expect(container.childNodes.length).toBe(1);
  });
  it("should close modal on accept button", () => {
    const { container } = render(<Modal {...props} />);
    const acceptButton = queryByTestId(container, "accept-button");
    expect(acceptButton).toBeTruthy();
    acceptButton?.click();
    expect(container.childNodes.length).toBe(1);
  });
  it("should close modal on decline button", () => {
    const { container } = render(<Modal {...props} />);
    const declineButton = queryByTestId(container, "decline-button");
    expect(declineButton).toBeTruthy();
    declineButton?.click();
    expect(container.childNodes.length).toBe(1);
  });
});
