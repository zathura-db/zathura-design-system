import { tv, VariantProps } from "tailwind-variants";

const directionButtonsStyles = tv({
  slots: {
    icon: "w-6 h-6",
  },
  variants: {
    buttonColour: {
      orange: { icon: "text-themeOrange" },
      black: { icon: "text-themeBlack" },
    },
  },
  defaultVariants: {
    buttonColour: "orange",
  },
});

export type DirectionButtonsProps = {
  onPrevious: () => void;
  onNext: () => void;
  buttonColour?: VariantProps<typeof directionButtonsStyles>["buttonColour"];
  buttonClassName?: string;
};

/**
 * Navigation control buttons (previous/next) for carousels and slideshows.
 */
export default function DirectionButtons({
  onPrevious,
  onNext,
  buttonColour = "orange",
  buttonClassName,
}: DirectionButtonsProps) {
  const { icon } = directionButtonsStyles({ buttonColour });

  return (
    <div className="flex justify-center gap-12 mb-10">
      <button
        onClick={onPrevious}
        className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 26 24"
          strokeWidth={4}
          stroke="currentColor"
          className={buttonClassName ?? icon()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className={buttonClassName ?? icon()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
