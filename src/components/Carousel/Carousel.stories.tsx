import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  argTypes: {
    buttonColour: { control: "select", options: ["orange", "black"] },
    autoRotate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const cards = [
  {
    image: "https://placehold.co/320x240?text=Project+1",
    title: "Project Alpha",
    text: "A React and TypeScript application.",
    linkOne: { href: "https://example.com", text: "Demo" },
    linkTwo: { href: "https://github.com", text: "Code" },
    stack: ["React", "TypeScript"],
  },
  {
    image: "https://placehold.co/320x240?text=Project+2",
    title: "Project Beta",
    text: "A Node.js REST API with PostgreSQL.",
    linkOne: { href: "https://example.com", text: "Demo" },
    linkTwo: { href: "https://github.com", text: "Code" },
    stack: ["Node.js", "PostgreSQL"],
  },
  {
    image: "https://placehold.co/320x240?text=Project+3",
    title: "Project Gamma",
    text: "A mobile-first design system component library.",
    linkOne: { href: "https://example.com", text: "Demo" },
    linkTwo: { href: "https://github.com", text: "Code" },
    stack: ["Storybook", "Tailwind"],
  },
  {
    image: "https://placehold.co/320x240?text=Project+4",
    title: "Project Delta",
    text: "A serverless application built on AWS Lambda.",
    linkOne: { href: "https://example.com", text: "Demo" },
    stack: ["AWS", "Serverless"],
  },
];

export const Default: Story = {
  args: { informationCards: cards, buttonColour: "orange" },
};

export const AutoRotate: Story = {
  args: { informationCards: cards, autoRotate: true, buttonColour: "black" },
};
