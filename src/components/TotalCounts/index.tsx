import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsDownload, BsBookmark } from 'react-icons/bs';

import styles from './styles.module.css';

import { IProduct } from 'interfaces/products';

function TotalCounts({ item }: { item: IProduct }) {
  return (
    <ul className={styles.downloadLikesSaves}>
      <li>
        <BsDownload /> {item.totalDownloads} downloads
      </li>
      <li className={styles.withDot}>
        <AiOutlineHeart />
        {item.totalBookmarks} likes
      </li>
      <li className={styles.withDot}>
        <BsBookmark />
        {item.totalBookmarks} salvos
      </li>
    </ul>
  );
}

export default TotalCounts;
