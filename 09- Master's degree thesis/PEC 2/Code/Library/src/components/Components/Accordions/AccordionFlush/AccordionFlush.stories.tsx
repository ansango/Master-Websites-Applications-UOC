/**
 * ?AccordionFlush Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccordionFlush from ".";

export default {
  title: "Components/Accordions/AccordionFlush",
  component: AccordionFlush,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof AccordionFlush>;

const Template: ComponentStory<typeof AccordionFlush> = (args) => <AccordionFlush {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  data: [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    },
  ],
};

export const B_WithIcon = Template.bind({});

B_WithIcon.args = {
  data: [
    {
      icon: "QuestionMarkCircleIcon",
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    },
    {
      icon: "QuestionMarkCircleIcon",
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      icon: "QuestionMarkCircleIcon",
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    },
  ],
};

export const C_MultipleParragraphs = Template.bind({});

C_MultipleParragraphs.args = {
  data: [
    {
      title: "Section 1",
      content: [
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.`,
        `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?`,
        `Mollitia veniam reprehenderit nam assumenda voluptatem ut.`,
        `Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur?`,
      ],
    },
    {
      title: "Section 2",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};

export const D_Info = Template.bind({});

D_Info.args = {
  kind: "info",
  data: [
    {
      icon: "BeakerIcon",
      title: "Section 1",
      content: [
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.`,
        `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?`,
        `Mollitia veniam reprehenderit nam assumenda voluptatem ut.`,
        `Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur?`,
      ],
    },
    {
      icon: "BriefcaseIcon",
      title: "Section 2",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};

export const E_Success = Template.bind({});

E_Success.args = {
  kind: "success",
  data: [
    {
      icon: "BeakerIcon",
      title: "Section 1",
      content: [
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.`,
        `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?`,
        `Mollitia veniam reprehenderit nam assumenda voluptatem ut.`,
        `Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur?`,
      ],
    },
    {
      icon: "BriefcaseIcon",
      title: "Section 2",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};

export const F_Danger = Template.bind({});
F_Danger.args = {
  kind: "danger",
  data: [
    {
      icon: "BeakerIcon",
      title: "Section 1",
      content: [
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.`,
        `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?`,
        `Mollitia veniam reprehenderit nam assumenda voluptatem ut.`,
        `Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur?`,
      ],
    },
    {
      icon: "BriefcaseIcon",
      title: "Section 2",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};

export const G_Warning = Template.bind({});

G_Warning.args = {
  kind: "warning",
  data: [
    {
      icon: "BeakerIcon",
      title: "Section 1",
      content: [
        `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.`,
        `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?`,
        `Mollitia veniam reprehenderit nam assumenda voluptatem ut.`,
        `Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur?`,
      ],
    },
    {
      icon: "BriefcaseIcon",
      title: "Section 2",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};