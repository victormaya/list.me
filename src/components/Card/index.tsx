import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsDownload } from 'react-icons/bs';

import Tag from 'components/Tag';

import styles from './styles.module.css';

import { IProduct } from 'interfaces/products';

function Card({ item }: { item: IProduct }) {
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
    <div className={styles.cardContainer}>
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
  );
}

export default Card;
