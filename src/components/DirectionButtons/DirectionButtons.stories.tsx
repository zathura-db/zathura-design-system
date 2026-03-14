import type { Meta, StoryObj } from "@storybook/react";
import DirectionButtons from "./DirectionButtons";

const meta: Meta<typeof DirectionButtons> = {
  title: "Components/DirectionButtons",
  component: DirectionButtons,
  parameters: { layout: "centered" },
  argTypes: {
    buttonColour: { control: "select", options: ["orange", "black"] },
    onPrevious: { action: "previous" },
    onNext: { action: "next" },
  },
};

export default meta;
type Story = StoryObj<typeof DirectionButtons>;

export const Orange: Story = {
  args: { buttonColour: "orange" },
};

export const Black: Story = {
  args: { buttonColour: "black" },
};
