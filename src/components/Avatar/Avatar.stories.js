import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: [
        "one-hundred-px",
        "twenty-four-px",
        "twenty-eight-px",
        "forty-eight-px",
        "forty-px",
        "sixteen-px",
        "sixty-four-px",
        "eighty-px",
        "thirty-two-px",
        "twenty-px",
      ],
      control: { type: "select" },
    },
    type: {
      options: ["initials", "image", "icon"],
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
    size: "one-hundred-px",
    type: "initials",
    corner: "rounded",
    withIndicator: true,
    className: {},
    overlapGroupClassName: {},
  },
};
