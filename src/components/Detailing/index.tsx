import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsDownload, BsMegaphone } from 'react-icons/bs';

import styles from './styles.module.css';

import { IProduct } from 'interfaces/products';

function Detailing({ left, item }: { left: number | null; item: IProduct }) {
  const detailingContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (detailingContainerRef.current && left) {
      const value = left - 38;
      detailingContainerRef.current.style.left = `-${value}px`;
    }
  }, [left]);

  return (
    <div
      ref={detailingContainerRef}
      className={`${styles.detailingContainer} ${styles.opened}`}
    >
      <div className={styles.leftSide}>
        <div className={styles.miniThumb}>
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            width={54}
            height={54}
          />
        </div>
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          width={356}
          height={356}
        />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.titleBrandMegaphone}>
          <div className={styles.ttitleBrand}>
            <h1 className={styles.itemTitle}>{item.title}</h1>
            <h2 className={styles.itemBrand}>
              <span>Marca:</span> {item.brand}
            </h2>
          </div>
        </div>
        <div className={styles.downloadLikesSaves}>
          <BsDownload /> {item.totalDownloads} downloads
          <AiOutlineHeart />
          {item.totalBookmarks} likes
          <BsBookmark />
          {item.totalBookmarks} salvos
        </div>
        <p className={styles.detailsTitle}>Detalhes do Produto</p>
        <ul className={styles.details}>
          <li>Superficie: {item.surface}</li>
          <li>Formato: {item.size}</li>
          <li>Reprodução: {item.reproduction}</li>
        </ul>
        <p className={styles.detailsTitle}>Descrição</p>
        <ul className={styles.details}>
          <li>{item.description}</li>
        </ul>
        <div className={styles.contentDown}>
          <div className={styles.bigButton}>
            <BsDownload /> Utilizar e especificar
          </div>
          <div className={styles.iconButton}>
            <AiOutlineHeart />
          </div>
          <div className={styles.iconButton}>
            <BsBookmark />
          </div>
          <div className={`${styles.iconButton} ${styles.megaphone}`}>
            <BsMegaphone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailing;
