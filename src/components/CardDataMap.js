// import { useState } from "react";
import { useEffect, useState } from "react";
import cardData from "./CardData";
import NewCard from "./NewCard";
import Header from "./Header";
import Footer from "./Footer";

function CardDataMap() {
  let [cardDataState, setCardDataState] = useState([]);

  useEffect(() => {
    setCardDataState(cardData);
  }, []);

  return (
    <div className="all-components">
      <Header />

      {cardDataState.map((item) => (
        <NewCard
          img={item.img}
          name={item.Name}
          details={item.details}
          specialPrice={item.specialPrice}
          price={item.price}
        />
      ))}
      <Footer />
    </div>
  );
}

export default CardDataMap;
