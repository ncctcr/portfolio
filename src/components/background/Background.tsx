import React, { FC, useEffect, useState } from "react";
import { generateSimilarColor, getRandomNumber } from "../../utils";
import styles from './Background.module.css';

type BlobData = {
  left: string;
  top: string;
  width: number;
  height: number;
  transformTime: number;
  movementTwoTime: number;
};

type PropsType = {
  count?: number;
  blobColor?: string;
  blur?: number
}

const Background: FC<PropsType> = ({
  count = 10,
  blobColor = '#0085FF',
  blur = 50
}) => {
  const [blobData, setBlobData] = useState<Array<BlobData>>([]);

  useEffect(() => {
    const blobs: BlobData[] = [];
    for (let i = 0; i < count; i++) {
      blobs.push({
        left: `${getRandomNumber(0, 90)}%`,
        top: `${getRandomNumber(0, 90)}%`,
        width: getRandomNumber(50, 600),
        height: getRandomNumber(50, 600),
        transformTime: getRandomNumber(10, 40),
        movementTwoTime: getRandomNumber(10, 40)
      });
    }
    setBlobData(blobs);
  }, [count]);

  const getRandomAttribute = (blob: BlobData) => {
    return {
      height: `${blob.height}px`,
      width: `${blob.width}px`,
      left: blob.left,
      top: blob.top,
      animation: `${styles.transform} ${blob.transformTime}s ease-in-out infinite both alternate, 
                  ${styles.movementTwo} ${blob.movementTwoTime}s ease-in-out infinite both`,
      background: `${generateSimilarColor(blobColor)}`,
      filter: `blur(${blur}px)`
    };
  };

  return (
    <div className={styles.wrapper}>
      {blobData.length > 0 && blobData.map((blob, index) => (
        <div className={styles.blob} key={index} style={getRandomAttribute(blob)} />
      ))}
    </div>
  );
};

export default Background;
