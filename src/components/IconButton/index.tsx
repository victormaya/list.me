import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsMegaphone } from 'react-icons/bs';

import styles from './styles.module.css';

function IconButton({ type }: { type: 'like' | 'save' | 'megaphone' }) {
  function renderIcon() {
    if (type === 'megaphone') {
      return <BsMegaphone />;
    } else if (type === 'like') {
      return <AiOutlineHeart />;
    } else if (type === 'save') {
      return <BsBookmark />;
    }
  }

  return <button className={styles.iconButton}>{renderIcon()}</button>;
}

export default IconButton;
