'use client';

import { useEffect, useState } from 'react';

import Card from 'components/Card';
import Search from 'components/Search';

import styles from './page.module.css';

import axios from 'axios';
import { IProducts } from 'interfaces/products';

export default function Home() {
  const [currentCard, setCurrentCard] = useState('-1');
  const [products, setProducts] = useState<IProducts>([]);

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<IProducts>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const handleSearch = () => {
      const filteredResults = products.filter((item) =>
        item.wordsForFilter.toLowerCase().includes(searchText)
      );

      setFilteredData(filteredResults);
    };
    if (searchText.length) {
      handleSearch();
    } else setFilteredData(products);
  }, [products, searchText]);

  return (
    <main className={styles.main}>
      <Search setSearchText={setSearchText} />
      <div className={styles.cardsContainer}>
        {filteredData.map((item) => (
          <Card
            key={item.id}
            item={item}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </main>
  );
}
