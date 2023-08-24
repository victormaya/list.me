import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsDownload, BsMegaphone } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

import styles from './styles.module.css';

import { IProduct } from 'interfaces/products';
import TotalCounts from 'components/TotalCounts';
import IconButton from 'components/IconButton';

function Detailing({
  left,
  item,
  setCurrentCard
}: {
  left: number | null;
  item: IProduct;
  setCurrentCard: React.Dispatch<React.SetStateAction<string>>;
}) {
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
      <button
        className={styles.closeButton}
        type="button"
        onClick={() => setCurrentCard('-1')}
      >
        <MdOutlineClose />
      </button>
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
        <TotalCounts item={item} />
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
          <IconButton type="like" />
          <IconButton type="save" />
          <div className={styles.megaphone}>
            <IconButton type="megaphone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailing;
