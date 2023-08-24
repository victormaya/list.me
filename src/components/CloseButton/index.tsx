import React, { MouseEventHandler } from 'react';
import { MdOutlineClose } from 'react-icons/md';

import styles from './styles.module.css';
// import { Container } from './styles';

function CloseButton({
  handleClick
}: {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles.closeButton} type="button" onClick={handleClick}>
      <MdOutlineClose />
    </button>
  );
}

export default CloseButton;
