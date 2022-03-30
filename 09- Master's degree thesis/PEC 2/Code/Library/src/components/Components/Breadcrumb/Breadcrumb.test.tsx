/**
 * ?Breadcrumb Test
 */

import { render } from "@testing-library/react";
import { FC, ReactNode } from "react";

import Breadcrumb from ".";

const Link: FC<{ to: string; children?: ReactNode }> = ({ children, to }) => (
  <a href={to}>{children}</a>
);

const routes = [
  {
    level: 1,
    title: "Home",
    path: "/",
    LinkElement: ({ children }: { children: ReactNode }) => <Link to="/">{children}</Link>,
  },
  {
    level: 2,
    title: "Course",
    path: "/course",
    LinkElement: ({ children }: { children: ReactNode }) => <Link to="/course">{children}</Link>,
  },
  {
    level: 3,
    title: "React",
    path: "/react",
    LinkElement: ({ children }: { children: ReactNode }) => <Link to="/course">{children}</Link>,
  },
  {
    level: 4,
    title: "React Hooks",
    path: "/course",
    current: true,
  },
];

describe("<Breadcrumb />", () => {
  it("should render", () => {
    const { container } = render(<Breadcrumb routes={routes} />);
    expect(container).toBeInTheDocument();
  });
});
