import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: "300vh", position: "relative" }}>
        <section id="Section One" style={{ height: "100vh", background: "#f0f0f0" }}>
          <h2>Section One</h2>
        </section>
        <section id="Section Two" style={{ height: "100vh", background: "#e0e0e0" }}>
          <h2>Section Two</h2>
        </section>
        <section id="Section Three" style={{ height: "100vh", background: "#d0d0d0" }}>
          <h2>Section Three</h2>
        </section>
        <Story />
      </div>
    ),
  ],
};
