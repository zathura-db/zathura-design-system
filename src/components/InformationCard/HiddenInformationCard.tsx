import type { DataCard } from "./InformationCard";

export type HiddenInformationCardProps = {
  informationCard: DataCard;
};

export default function HiddenInformationCard({
  informationCard,
}: HiddenInformationCardProps) {
  return (
    <div className="hidden">
      <img
        src={informationCard.image}
        alt={`Image of ${informationCard.title} project`}
        width={320}
        height={240}
      />
      <h4>{informationCard.title}</h4>
      <p>{informationCard.text}</p>
    </div>
  );
}
