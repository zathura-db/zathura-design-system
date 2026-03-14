import type { Meta, StoryObj } from "@storybook/react";
import ProjectTile from "./ProjectTile";

const meta: Meta<typeof ProjectTile> = {
  title: "Components/ProjectTile",
  component: ProjectTile,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProjectTile>;

export const Default: Story = {
  args: {
    imageSrc: "https://placehold.co/800x450?text=Project",
    title: "My Awesome Project",
    description:
      "A full-stack application built with React, Node.js, and PostgreSQL featuring real-time updates.",
    link1: { href: "https://example.com", text: "Live Demo" },
    link2: { href: "https://github.com", text: "View Code" },
    stack: ["React", "TypeScript", "Node.js", "Tailwind"],
  },
};

export const SingleLink: Story = {
  args: {
    imageSrc: "https://placehold.co/800x450?text=Project",
    title: "Side Project",
    description: "A fun weekend project exploring new technologies.",
    link1: { href: "https://example.com", text: "View Demo" },
    stack: ["Next.js", "Prisma"],
  },
};
