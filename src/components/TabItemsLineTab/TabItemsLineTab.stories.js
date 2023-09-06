import { TabItemsLineTab } from ".";

export default {
  title: "Components/TabItemsLineTab",
  component: TabItemsLineTab,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "disabled",
    leadingIcon: true,
    trailingIcon: true,
    badge: true,
    className: {},
    text: "Tab",
    lineClassName: {},
    divClassName: {},
    badgeText: "01",
  },
};
