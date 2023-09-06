import { Badge } from ".";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    type: {
      options: ["ghost", "outline", "default"],
      control: { type: "select" },
    },
    leadingItem: {
      options: ["avatar", "none", "indicator", "icon"],
      control: { type: "select" },
    },
    corner: {
      options: ["rounded", "circular"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: true,
    type: "ghost",
    leadingItem: "avatar",
    dismissible: true,
    corner: "rounded",
    className: {},
    divClassName: {},
    text: "Badge",
    divClassNameOverride: {},
  },
};
