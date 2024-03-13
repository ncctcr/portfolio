import styles from './Background.module.css'
import {FC} from "react";
import {generateSimilarColor, getRandomNumber} from "../../utils";

type PropsType = {
  count?: number;
  blobColor?: string;
}

const Background: FC<PropsType> = ({
  count = 8,
  blobColor = '#0085FF',
}) => {

  const getRandomAttribute = () => {
    const transformTime = getRandomNumber(10, 40)
    const movementTwoTime = getRandomNumber(10, 40)

    const blobSize = getRandomNumber(50, 600)

    return {
      height: `${blobSize}px`,
      width: `${blobSize}px`,
      left: `${getRandomNumber(0, 90)}%`,
      top: `${getRandomNumber(0, 90)}%`,
      animation: `${styles.transform} ${transformTime}s ease-in-out infinite both alternate, 
                  ${styles.movementTwo} ${movementTwoTime}s ease-in-out infinite both`,
      background: `${generateSimilarColor(blobColor)}`
    }
  }

  const getBlobs = () => {
    const blobs = []
    for (let i = 0; i < count; i++) {
      blobs.push(<div className={styles.blob} key={i} style={getRandomAttribute()}/>)
    }
    return blobs
  }


  return (
    <div className={styles.wrapper}>
      {getBlobs()}
    </div>
  )
}

export default Background