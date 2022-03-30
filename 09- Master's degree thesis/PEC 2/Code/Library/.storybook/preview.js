import anysort from "anysort";
import "../src/tailwind.css";

export const globalTypes = {
  darkMode: true,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  staticDirs: ["../assets"],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous;
      const [nextStory, nextMeta] = next;
      return anysort(previousMeta.kind, nextMeta.kind, [
        "Readme/Introduction",
        "Readme/Getting Started",
        "Readme/Create a Component",
        "Readme/Test and Lint",
        "Readme/Build and Deploy",
        "Readme/Contributing",
        "Atoms/Icons/Icon",
        "Atoms/Icons/Icon Simple",
        "Atoms/Badge",
        "Atoms/Spinner",
        "Components/Alerts/Alert",
        "Components/Alerts/Alert Content",
        "Components/Accordions/Accordion",
        "Components/Accordions/Accordion Flush",
        "Components/Avatar",
        "Components/Breadcrumb",
        "Components/Buttons/Button",
        "Components/Buttons/Button Icon",
        "Components/Buttons/Gradient Monochrome",
        "Components/Buttons/Gradient Duotone",
        "Components/Button Group",
        "Components/Cards/Card",
        "Components/Cards/Card Action",
        "Components/Cards/Card Image",
        "Components/Cards/Card Horizontal",
        "Components/Cards/Card Interaction",
        "Components/Cards/Card Form",
        "Components/Cards/Card Ecommerce",
        "Components/Cards/Card Call Action",
        "Components/Cards/Card List",
        "Components/Cards/Card Pricing",
        "Components/Cards/Card Feature",
        "Components/Dropdowns/Dropdown",
        "Components/Dropdowns/Dropdown Icon",
      ]);
    },
  },
};
