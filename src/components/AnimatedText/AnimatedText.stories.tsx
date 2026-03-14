import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedText } from "./AnimatedText";

const meta: Meta<typeof AnimatedText> = {
  title: "Components/AnimatedText",
  component: AnimatedText,
  parameters: { layout: "centered", backgrounds: { default: "dark" } },
  argTypes: {
    prefix: { control: "text" },
    textContent: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedText>;

export const Default: Story = {
  args: {
    prefix: "Hello, I am a ",
    textContent: "Coder",
  },
};

export const NoPrefix: Story = {
  args: {
    textContent: "React",
  },
};
