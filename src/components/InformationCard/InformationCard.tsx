interface LinkButton {
  href: string;
  text: string;
}

export interface DataCard {
  image: string;
  title: string;
  text: string;
  linkOne: LinkButton;
  linkTwo?: LinkButton;
  scaleImage?: string;
  stack?: string[];
}

export type InformationCardProps = {
  informationCard: DataCard;
  cardWidth: number;
  fade: string;
  buttonClassName: string;
};

/**
 * A card component for displaying project or content information with image,
 * title, description, and action buttons.
 */
export default function InformationCard({
  informationCard,
  cardWidth,
  fade,
  buttonClassName,
}: InformationCardProps) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out w-[240px] sm:w-[320px] bg-white rounded-2xl shadow-2xl drop-shadow-xl mb-16 flex flex-col h-[480px] sm:h-[540px] md:h-[480px] ${fade}`}
      style={{ minWidth: cardWidth, maxWidth: cardWidth }}
    >
      <div className="h-1/2 w-full overflow-hidden rounded-t-2xl border-b-2 border-gray-100 relative">
        <a href={informationCard.linkOne.href} target="_blank" rel="noreferrer">
          <img
            src={informationCard.image}
            alt={`Image of ${informationCard.title} project`}
            className={`w-full h-full object-cover ${informationCard.scaleImage || ""}`}
          />
        </a>

        {informationCard.stack && informationCard.stack.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5 z-10">
            {informationCard.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-themeOrange text-white px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="h-1/2 flex flex-col justify-between text-center">
        <div className="px-4 sm:px-8 py-4 flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 pb-2">
            {informationCard.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {informationCard.text}
          </p>
        </div>
        <div className="flex w-full">
          <a
            href={informationCard.linkOne.href}
            target="_blank"
            rel="noreferrer"
            className={`${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center ${
              informationCard.linkTwo
                ? "flex-1 rounded-bl-2xl border-r-2 border-white"
                : "w-full rounded-b-2xl"
            }`}
          >
            {informationCard.linkOne.text}
          </a>
          {informationCard.linkTwo && (
            <a
              href={informationCard.linkTwo.href}
              target="_blank"
              rel="noreferrer"
              className={`${buttonClassName} text-white font-semibold py-3 px-4 transition-colors duration-200 text-center flex-1 rounded-br-2xl`}
            >
              {informationCard.linkTwo.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
