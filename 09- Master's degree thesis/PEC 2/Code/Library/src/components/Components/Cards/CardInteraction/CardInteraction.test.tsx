/**
 * ?CardInteraction Test
 */

import { render } from "@testing-library/react";

import CardInteraction, { CardInteractionProps } from ".";

const props: CardInteractionProps = {
  header: {
    activeHeader: true,
    dropIcon: "DotsVerticalIcon",
    options: [
      {
        label: "Option 1",
        action: () => alert("Option 1"),
      },
    ],
  },
  content: {
    avatar: "https://via.placeholder.com/150",
    title: "Title",
    subtitle: "Subtitle",
  },
  actions: {
    activeActions: true,
    primary: {
      label: "Primary",
      action: () => alert("Primary"),
    },
    secondary: {
      label: "Secondary",
      action: () => alert("Secondary"),
    },
  },
};

describe("<CardInteraction />", () => {
  it("should render", () => {
    render(<CardInteraction {...props} />);
  });
});
