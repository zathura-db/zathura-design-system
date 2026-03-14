import type { Meta, StoryObj } from "@storybook/react";
import InformationCard from "./InformationCard";

const meta: Meta<typeof InformationCard> = {
  title: "Components/InformationCard",
  component: InformationCard,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof InformationCard>;

const sampleCard = {
  image: "https://placehold.co/320x240?text=Project",
  title: "My Project",
  text: "A short description of this awesome project built with React and TypeScript.",
  linkOne: { href: "https://example.com", text: "View Demo" },
  linkTwo: { href: "https://github.com", text: "View Code" },
  stack: ["React", "TypeScript", "Tailwind"],
};

export const Default: Story = {
  args: {
    informationCard: sampleCard,
    cardWidth: 320,
    fade: "opacity-100 scale-100",
    buttonClassName: "bg-themeOrange hover:bg-themeBlack",
  },
};

export const SingleButton: Story = {
  args: {
    informationCard: { ...sampleCard, linkTwo: undefined },
    cardWidth: 320,
    fade: "opacity-100 scale-100",
    buttonClassName: "bg-themeBlue hover:bg-blue-700",
  },
};

export const Faded: Story = {
  args: {
    informationCard: sampleCard,
    cardWidth: 320,
    fade: "opacity-50 scale-90",
    buttonClassName: "bg-themeOrange hover:bg-themeBlack",
  },
};
