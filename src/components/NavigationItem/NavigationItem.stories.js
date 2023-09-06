import { NavigationItem } from ".";

export default {
  title: "Components/NavigationItem",
  component: NavigationItem,
  argTypes: {
    level: {
      options: ["level-2", "level-1-dropdown", "level-1", "heading"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    level: "level-2",
    stateProp: "disabled",
    className: {},
    text: "Navigation Item",
    text1: "HEADING",
    contentClassName: {},
    text2: "Sub Item",
    activeLineClassName: {},
    contentClassNameOverride: {},
  },
};
