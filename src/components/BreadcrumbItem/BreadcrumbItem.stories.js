import { BreadcrumbItem } from ".";

export default {
  title: "Components/BreadcrumbItem",
  component: BreadcrumbItem,
  argTypes: {
    type: {
      options: ["icon-only", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "icon-only",
    active: true,
    leadingIcon: true,
    trailingIcon: true,
    className: {},
    text: "Home",
    divClassName: {},
  },
};
