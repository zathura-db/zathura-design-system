import type { Meta, StoryObj } from "@storybook/react";
import StarBackground from "./StarBackground";

const meta: Meta<typeof StarBackground> = {
  title: "Components/StarBackground",
  component: StarBackground,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof StarBackground>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h1 className="text-5xl font-bold">Hello World</h1>
        <p className="text-xl mt-4">A beautiful starfield background</p>
      </div>
    ),
  },
};
