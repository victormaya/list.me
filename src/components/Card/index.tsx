import Image from 'next/image';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';

import CountButton from 'components/CountButton';
import Detailing from 'components/Detailing';
import Tag from 'components/Tag';

import styles from './styles.module.css';

import { IProduct } from 'interfaces/products';

function Card({
  item,
  currentCard,
  setCurrentCard
}: {
  item: IProduct;
  currentCard: string;
  setCurrentCard: Dispatch<SetStateAction<string>>;
}) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [elementLeft, setElementLeft] = useState<number | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const { left } = elementRef.current.getBoundingClientRect();
      setElementLeft(left);
    }
  }, [currentCard]);

  const handleButtonClick = (id: string) => {
    setCurrentCard(id);
  };

  function formatSize(value: string) {
    if (!value.includes('x')) {
      return null;
    }
    return (
      <>
        <span className={styles.cardBrandBall}>●</span>
        {item.size.replace(/"/g, '')}
      </>
    );
  }

  return (
    <div
      className={`${styles.cardDetailingContainer} ${
        currentCard === item.id ? styles.cardDetailingContainerOpened : ''
      }`}
    >
      <div
        className={styles.cardContainer}
        ref={elementRef}
        onClick={() => handleButtonClick(item.id)}
      >
        <Tag />
        <div className={styles.imageContainer}>
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            width={243}
            height={243}
          />
        </div>
        <p className={styles.cardTitle}>{item.title}</p>
        <span className={styles.cardBrand}>
          {item.brand.replace(/"/g, '')} {formatSize(item.size)}
        </span>
        <div className={styles.cardButtons}>
          <div className={styles.cardButtonsLeft}>
            <CountButton type="download" total={item.totalDownloads} />
            <CountButton type="like" total={item.totalLikes} />
          </div>
          <div className={styles.cardButtonsRight}>
            <CountButton type="save" total={item.totalBookmarks} />
          </div>
        </div>
      </div>
      {currentCard === item.id && (
        <Detailing
          item={item}
          left={elementLeft}
          setCurrentCard={setCurrentCard}
        />
      )}
    </div>
  );
}

export default Card;
