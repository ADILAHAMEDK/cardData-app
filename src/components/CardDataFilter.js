import cardData from "./CardData";
import NewCard from "./NewCard";
import Header from "./header";

function CardDataFilter() {
  return (
    <div className="all-components">
        <Header/>
      {cardData.map((item) => (
        <NewCard img={item.img} name={item.Name} />
      ))}
    </div>
  );
}

export default CardDataFilter;
