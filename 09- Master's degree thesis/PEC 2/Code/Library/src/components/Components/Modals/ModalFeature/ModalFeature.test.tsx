/**
 * ?ModalFeature Test
 */

import { render, screen } from "@testing-library/react";

import ModalFeature, { ModalFeatureProps } from ".";

const props: ModalFeatureProps = {};

describe("<ModalFeature />", () => {
  it("should render", () => {
    render(<ModalFeature {...props} />);
    expect(screen.getByText("ModalFeature")).toBeInTheDocument();
  })
})