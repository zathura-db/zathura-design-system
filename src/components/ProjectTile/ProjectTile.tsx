import Button from "../Button/Button";
import InformationCard, {
  type DataCard,
} from "../InformationCard/InformationCard";

interface Link {
  href: string;
  text: string;
}

export interface ProjectTileProps {
  imageSrc: string;
  title: string;
  description: string;
  link1: Link;
  link2?: Link;
  stack?: string[];
  mobileViewScaleImage?: string;
}

/**
 * ProjectTile – responsive project showcase tile.
 * On mobile it renders an `InformationCard`; on desktop it shows a hover-overlay tile.
 */
export default function ProjectTile({
  imageSrc,
  title,
  description,
  link1,
  link2,
  stack = [],
  mobileViewScaleImage,
}: ProjectTileProps) {
  const cardData: DataCard = {
    image: imageSrc,
    title,
    text: description,
    linkOne: link1,
    linkTwo: link2,
    scaleImage: mobileViewScaleImage ? "scale-125 origin-center" : undefined,
    stack,
  };

  return (
    <>
      {/* Mobile view */}
      <div className="block md:hidden w-full flex justify-center px-4">
        <InformationCard
          informationCard={cardData}
          cardWidth={280}
          fade="opacity-100 scale-100"
          buttonClassName="bg-themeOrange hover:bg-orange-600"
        />
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full absolute inset-0"
          />

          {stack.length > 0 && (
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-10">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-themeOrange text-white px-3 py-1 rounded-full text-sm font-medium shadow-md group-hover:shadow-none transition-shadow duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center px-12 py-8 space-y-3 opacity-0 group-hover:opacity-100">
            <h3 className="text-3xl font-bold leading-tight text-white text-center">
              {title}
            </h3>
            <p className="text-base text-white leading-snug text-center max-w-xl">
              {description}
            </p>

            <div className="flex flex-row gap-4">
              <Button
                baseColour="orange"
                hoverStyle="orangeOutline"
                buttonSize="small"
                className="min-w-[120px]"
                onClick={() => window.open(link1.href, "_blank")}
              >
                {link1.text}
              </Button>

              {link2 && (
                <Button
                  baseColour="orangeOutline"
                  hoverStyle="orangeFill"
                  buttonSize="small"
                  className="min-w-[120px]"
                  onClick={() => window.open(link2.href, "_blank")}
                >
                  {link2.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
