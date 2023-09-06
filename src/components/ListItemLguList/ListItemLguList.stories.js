import { ListItemLguList } from ".";

export default {
  title: "Components/ListItemLguList",
  component: ListItemLguList,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["avatar-with-subtitle", "default", "avatar", "EGMP", "subtitle"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "disabled",
    type: "avatar-with-subtitle",
    badge: true,
    className: {},
    divClassName: {},
    text: "Juan Dela Cruz",
    text1: "Nurse",
    badgeColorNoTypeClassName: {},
    badgeText: "MOBILIZED",
  },
};
