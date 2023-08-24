import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsDownload } from 'react-icons/bs';

import styles from './styles.module.css';

function CountButton({
  type,
  total
}: {
  type: 'download' | 'like' | 'save';
  total: number;
}) {
  function renderIcon() {
    if (type === 'download') {
      return <BsDownload className={styles.cardSvg} />;
    } else if (type === 'like') {
      return <AiOutlineHeart />;
    } else if (type === 'save') {
      return <BsBookmark />;
    }
  }

  return (
    <button className={styles.countButton}>
      {renderIcon()}
      {total}
    </button>
  );
}

export default CountButton;
