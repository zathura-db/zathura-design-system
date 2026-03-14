import type { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  parameters: { layout: "fullscreen" },
  argTypes: {
    colour: {
      control: "select",
      options: ["white", "black", "orange", "blue", "green"],
    },
    type: { control: "select", options: ["normal", "chevron"] },
    sectionTitle: { control: "text" },
    disableHeading: { control: "boolean" },
    disableUnderline: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const White: Story = {
  args: {
    sectionTitle: "My Section",
    colour: "white",
    children: <p className="text-gray-700 max-w-xl">Section content goes here.</p>,
  },
};

export const Black: Story = {
  args: {
    sectionTitle: "Dark Section",
    colour: "black",
    children: <p className="text-white max-w-xl">Section content on a dark background.</p>,
  },
};

export const Orange: Story = {
  args: {
    sectionTitle: "Orange Section",
    colour: "orange",
    children: <p className="text-white max-w-xl">Vibrant orange section content.</p>,
  },
};
