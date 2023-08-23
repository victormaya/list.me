import React, { useEffect, useRef } from 'react';

import styles from './styles.module.css';

function Detailing({ left }: { left: number | null }) {
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
    ></div>
  );
}

export default Detailing;
