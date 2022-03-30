/**
 * ?Accordion Test
 */

import { render, screen, queryByTestId, fireEvent } from "@testing-library/react";

import Accordion, { AccordionProps } from ".";

const props: AccordionProps = {
  data: [
    {
      icon: "AcademicCapIcon",
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

    {
      title: "Section 4",
      content: [
        "Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos dolor ut sequi minus iste? Quas?",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
        "Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
      ],
    },
  ],
};

describe("<Accordion />", () => {
  it("should render", () => {
    render(<Accordion {...props} />);
    expect(screen.queryByTestId("accordion-item-1")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-item-2")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-item-3")).toBeInTheDocument();
  });
  it("should open the first item", () => {
    const { container } = render(<Accordion {...props} />);
    const firstItem = queryByTestId(container, "accordion-item-btn-1");
    if (firstItem) {
      fireEvent.click(firstItem);
      expect(firstItem.className).toContain("bg-gray-100");
    } else {
      expect(screen.queryByTestId("accordion-item-content-1")).toBeInTheDocument();
    }
  });
  it("should render multiple parragraphs", () => {
    const { container } = render(<Accordion {...props} />);
    const fourthContentItem = queryByTestId(container, "accordion-item-content-4")?.firstChild;
    if (fourthContentItem) {
      expect(fourthContentItem.childNodes.length).toBe(3);
    } else {
      expect(screen.queryByTestId("accordion-item-content-4")).toBeInTheDocument();
    }
  });
  it("should render with icon", () => {
    const { container } = render(<Accordion {...props} />);
    const firstItem = queryByTestId(container, "accordion-item-btn-1");
    expect(firstItem?.firstChild).toBeInTheDocument();
  });
});
