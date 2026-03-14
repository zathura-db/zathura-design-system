import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DropDown from "./DropDown";

const meta: Meta<typeof DropDown> = {
  title: "Components/DropDown",
  component: DropDown,
  parameters: { layout: "centered" },
  argTypes: {
    primaryColour: {
      control: "select",
      options: ["Orange", "Blue", "Green", "Red", "Purple", "Black"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ width: 320, padding: 16 }}>
        <DropDown
          {...args}
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          toggleText={{ OpenText: "Show Content", CloseText: "Hide Content" }}
        >
          <p className="mt-4 text-gray-700">
            This is the dropdown content. It can contain any React nodes.
          </p>
        </DropDown>
      </div>
    );
  },
  args: { primaryColour: "Orange" },
};
