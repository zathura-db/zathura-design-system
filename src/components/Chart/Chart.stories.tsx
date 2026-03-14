import type { Meta, StoryObj } from "@storybook/react";
import Chart from "./Chart";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
  parameters: { layout: "centered" },
  argTypes: {
    chartColour: { control: "text" },
    chartTitle: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Chart>;

const skills = [
  { name: "TypeScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "CSS", level: 80 },
];

export const Orange: Story = {
  args: {
    chartTitle: "Frontend Skills",
    chartColour: "bg-themeOrange",
    skills,
  },
};

export const Blue: Story = {
  args: { chartTitle: "Backend Skills", chartColour: "bg-themeBlue", skills },
};

export const Green: Story = {
  args: { chartTitle: "DevOps Skills", chartColour: "bg-themeGreen", skills },
};
