import { SolidButton } from ".";

export default {
  title: "Components/SolidButton",
  component: SolidButton,
  argTypes: {
    type: {
      options: ["warning", "danger", "default", "success", "secondary", "primary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small", "extra-small", "default"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["toggle", "disabled", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "warning",
    size: "large",
    stateProp: "toggle",
    leadingIcon: true,
    trailingIcon: true,
    className: {},
    text: "Button",
    contentClassName: {},
  },
};
