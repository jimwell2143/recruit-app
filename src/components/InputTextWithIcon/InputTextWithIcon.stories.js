import { InputTextWithIcon } from ".";

export default {
  title: "Components/InputTextWithIcon",
  component: InputTextWithIcon,
  argTypes: {
    state: {
      options: ["danger", "active", "default", "verified", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "danger",
    leadingIcon: true,
    trailingIcon: true,
    label: true,
    required: true,
    optional: true,
    helpText: true,
    className: {},
    text: "Placeholder",
  },
};
