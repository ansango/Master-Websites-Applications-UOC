/**
 * ?CardCallAction Test
 */

import { render } from "@testing-library/react";

import CardCallAction, { CardCallActionProps } from ".";

const props: CardCallActionProps = {
  title: "Work fast from anywhere",
  description:
    "Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.",
  actions: {
    primary: {
      icon: "Apple",
      label: "Mac App Store",
      description: "Download on the",
      action: () => alert("Download on the Mac App Store"),
    },
    secondary: {
      icon: "Googleplay",
      label: "Google Play",
      description: "Get it on the",
      action: () => alert("Get it on the Google Play"),
    },
  },
};

describe("<CardCallAction />", () => {
  it("should render", () => {
    render(<CardCallAction {...props} />);
  });
});
