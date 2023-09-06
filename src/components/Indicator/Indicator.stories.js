import { Indicator } from ".";

export default {
  title: "Components/Indicator",
  component: Indicator,
  argTypes: {
    size: {
      options: ["large", "small", "medium", "default"],
      control: { type: "select" },
    },
    status: {
      options: ["warning", "success", "danger", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    status: "warning",
    className: {},
  },
};
