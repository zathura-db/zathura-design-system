import { useEffect, useRef, useState } from "react";
import { tv, VariantProps } from "tailwind-variants";
import InformationCard, { type DataCard } from "../InformationCard/InformationCard";
import HiddenInformationCard from "../InformationCard/HiddenInformationCard";
import DirectionButtons from "../DirectionButtons/DirectionButtons";

const carouselStyles = tv({
  slots: { button: "" },
  variants: {
    buttonColour: {
      orange: { button: "bg-themeOrange hover:bg-themeBlack" },
      black: { button: "bg-themeBlack hover:bg-themeOrange" },
    },
  },
  defaultVariants: { buttonColour: "orange" },
});

export type CarouselProps = {
  informationCards: DataCard[];
  autoRotate?: boolean;
  buttonColour?: VariantProps<typeof carouselStyles>["buttonColour"];
  className?: string;
};

const CARD_WIDTH = 320;
const GAP = 32;

/**
 * Carousel – displays information cards three at a time with infinite-loop navigation.
 * Requires at least 3 cards.
 */
export default function Carousel({
  informationCards,
  autoRotate = false,
  buttonColour = "orange",
  className,
}: CarouselProps) {
  if (informationCards.length < 3) {
    throw new Error("Carousel requires at least 3 information cards");
  }

  const { button } = carouselStyles({ buttonColour });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH);
  const [gap, setGap] = useState(GAP);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardWidth(240);
        setGap(12);
      } else {
        setCardWidth(CARD_WIDTH);
        setGap(GAP);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      goToIndex(currentIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoRotate]);

  const goToIndex = (idx: number) => {
    setTransition(true);
    let next = idx;
    if (next < 0) next = informationCards.length - 1;
    if (next >= informationCards.length) next = 0;
    setCurrentIndex(next);
  };

  const getVisibleIndexes = () => {
    const left = (currentIndex - 1 + informationCards.length) % informationCards.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % informationCards.length;
    return [left, center, right];
  };

  const [leftIndex, centerIndex, rightIndex] = getVisibleIndexes();

  const getTranslateX = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      const viewportCenter = window.innerWidth / 2;
      const centerTilePosition = cardWidth + gap + cardWidth / 2;
      return viewportCenter - centerTilePosition;
    }
    return 0;
  };

  return (
    <div className="flex flex-col items-center w-full md:w-auto relative">
      <div className="overflow-hidden w-full">
        <div
          ref={carouselRef}
          className="flex gap-3 sm:gap-8 select-none"
          style={{
            width: `${(cardWidth + gap) * 3 - gap}px`,
            transform: `translateX(${getTranslateX()}px)`,
            transition: transition ? "transform 0.5s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        >
          {informationCards.map((informationCard, index) => {
            if (index === leftIndex || index === centerIndex || index === rightIndex) return null;
            return <HiddenInformationCard key={index} informationCard={informationCard} />;
          })}
          {[leftIndex, centerIndex, rightIndex].map((pos) => {
            const card = informationCards[pos];
            let fade = "opacity-50 scale-90";
            if (pos === centerIndex) fade = "opacity-100 scale-100 z-10";
            return (
              <InformationCard
                key={pos}
                informationCard={card}
                cardWidth={cardWidth}
                fade={fade}
                buttonClassName={className ?? button()}
              />
            );
          })}
        </div>
      </div>
      <DirectionButtons
        onPrevious={() => goToIndex(currentIndex - 1)}
        onNext={() => goToIndex(currentIndex + 1)}
        buttonColour={buttonColour ?? "orange"}
      />
    </div>
  );
}
