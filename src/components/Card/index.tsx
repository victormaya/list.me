import Image from 'next/image';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsDownload } from 'react-icons/bs';

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
            <button className={styles.cardButton}>
              <BsDownload className={styles.cardSvg} />
              {item.totalDownloads}
            </button>
            <button className={styles.cardButton}>
              <AiOutlineHeart />
              {item.totalLikes}
            </button>
          </div>
          <div className={styles.cardButtonsRight}>
            <button className={styles.cardButton}>
              <BsBookmark />
              {item.totalBookmarks}
            </button>
          </div>
        </div>
      </div>
      {currentCard === item.id && <Detailing item={item} left={elementLeft} />}
    </div>
  );
}

export default Card;
