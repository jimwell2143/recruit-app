import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    type: {
      options: [
        "endorsed-candidates",
        "deployment-projections",
        "default",
        "VISA-module",
        "documents",
        "CMS",
        "applicants-jobseekers",
        "datasets",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "endorsed-candidates",
    className: {},
    navigationItemStateProp: "default",
    navigationItemLevelLevelStateClassName: {},
  },
};
