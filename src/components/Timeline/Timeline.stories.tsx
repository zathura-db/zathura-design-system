import type { Meta, StoryObj } from "@storybook/react";
import Timeline from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Components/Timeline",
  component: Timeline,
  parameters: { layout: "padded" },
  argTypes: {
    PrimaryColour: {
      control: "select",
      options: ["Orange", "Blue", "Green", "Red", "Purple", "Black"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

const timelines = [
  {
    JobTitle: "Senior Software Engineer",
    companyName: "Acme Corp",
    startDate: "Jan 2022",
    endDate: undefined,
    content: ["Led the frontend architecture for a React-based SaaS product."],
    projects: [
      {
        ShortDescription: "Dashboard Redesign",
        Description:
          "Rebuilt the analytics dashboard with React and TypeScript.",
        BulletPoints: [
          "Reduced load time by 40%",
          "Improved accessibility to WCAG 2.1 AA",
        ],
      },
    ],
  },
  {
    JobTitle: "Software Engineer",
    companyName: "Beta Ltd",
    startDate: "Jun 2019",
    endDate: "Dec 2021",
    content: [
      "Built and maintained REST APIs with Node.js.",
      "Collaborated with cross-functional teams.",
    ],
  },
  {
    JobTitle: "Junior Developer",
    companyName: "Gamma Inc",
    startDate: "Mar 2017",
    endDate: "May 2019",
    content: ["Developed features for an e-commerce platform."],
  },
];

export const Orange: Story = {
  args: { Timelines: timelines, PrimaryColour: "Orange" },
};

export const Blue: Story = {
  args: { Timelines: timelines, PrimaryColour: "Blue" },
};
