import { Logo } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    project: {
      options: [
        "lipa",
        "manila",
        "smart-LGU",
        "bayombong",
        "calamba",
        "catarman",
        "borongan",
        "e-GMP-white",
        "cauayan",
        "e-GMP-colored",
        "solano",
        "bohol",
        "smart-city",
        "las-pi-as",
      ],
      control: { type: "select" },
    },
    type: {
      options: ["ads", "seal", "default"],
      control: { type: "select" },
    },
    color: {
      options: ["white", "colored"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    project: "lipa",
    type: "ads",
    color: "white",
    projectBoronganClassName: {},
  },
};
