import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    baseColour: {
      control: "select",
      options: [
        "red",
        "orange",
        "blue",
        "green",
        "purple",
        "black",
        "orangeOutline",
      ],
    },
    hoverStyle: {
      control: "select",
      options: [
        "white",
        "redOffset",
        "orangeOffset",
        "blueOffset",
        "greenOffset",
        "purpleOffset",
        "blackOffset",
        "orangeFill",
        "orangeOutline",
      ],
    },
    buttonSize: { control: "select", options: ["small", "large"] },
    display: { control: "select", options: ["inline", "block"] },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Click me", baseColour: "red" },
};

export const Orange: Story = {
  args: {
    children: "Orange Button",
    baseColour: "orange",
    hoverStyle: "orangeOffset",
  },
};

export const Blue: Story = {
  args: {
    children: "Blue Button",
    baseColour: "blue",
    hoverStyle: "blueOffset",
    buttonSize: "small",
  },
};

export const OrangeOutline: Story = {
  args: {
    children: "Outline Button",
    baseColour: "orangeOutline",
    hoverStyle: "orangeFill",
  },
};

export const BlockGreen: Story = {
  args: {
    children: "Block Button",
    display: "block",
    baseColour: "green",
    hoverStyle: "greenOffset",
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};
