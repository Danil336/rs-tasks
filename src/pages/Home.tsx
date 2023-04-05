import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MySearchButton, MySearchInput } from '../components/MyButtons/MySearch';
import { MyPrCard } from '../components/productCards/MyPrCard';

export type Card = {
  id?: number;
  title: string;
  price: number;
  description: string;
  images?: string[];
  image?: string;
};

function Home() {
  const [cards, setCards] = useState<Card[]>([]);

  async function fetchCards() {
    const response = await axios.get<Card[]>(
      'https://api.escuelajs.co/api/v1/products?offset=0&limit=15'
    );
    setCards(response.data);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="wrapper">
      <div className="main_header">
        <h1 className="main_title">Main page</h1>
        <div className="main_search">
          <MySearchInput />
          <MySearchButton />
        </div>
      </div>
      <div className="main_cards">
        {cards.map((card) => (
          <MyPrCard
            key={card.id}
            title={card.title}
            price={card.price}
            description={card.description}
            image={card.images![0]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
