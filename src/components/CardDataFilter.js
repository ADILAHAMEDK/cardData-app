import cardData from "./CardData";
import NewCard from "./NewCard";

function CardDataFilter() {
  return (
    <div>
      {cardData.map((item) => (
        <NewCard img={item.img} watchname={item.watchName} />
      ))}
    </div>
  );
}

export default CardDataFilter;
