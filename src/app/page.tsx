'use client';

import { useEffect, useState } from 'react';

import Card from 'components/Card';

import styles from './page.module.css';

import axios from 'axios';
import { IProducts } from 'interfaces/products';

export default function Home() {
  const [products, setProducts] = useState<IProducts>([]);

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

  return (
    <main className={styles.main}>
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}
