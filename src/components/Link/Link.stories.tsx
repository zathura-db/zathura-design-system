import type { Meta, StoryObj } from "@storybook/react";
import { LinkText } from "./Link";

const meta: Meta<typeof LinkText> = {
  title: "Components/LinkText",
  component: LinkText,
  parameters: { layout: "centered" },
  argTypes: {
    linkColour: { control: "select", options: ["black", "red", "white"] },
    fontWeight: { control: "select", options: ["bold", "normal"] },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof LinkText>;

export const RedDefault: Story = {
  args: { children: "Red Link", linkColour: "red" },
};

export const BlackBold: Story = {
  args: {
    children: "Black Bold Link",
    linkColour: "black",
    fontWeight: "bold",
  },
};

export const WhiteOnDark: Story = {
  args: { children: "White Link", linkColour: "white" },
  parameters: { backgrounds: { default: "dark" } },
};
