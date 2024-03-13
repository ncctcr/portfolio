import styles from './ColorPicker.module.css';
import {FC} from "react";

type PropsType = {
  color: string;
  setColor: (color: string) => void
}

const ColorPicker: FC<PropsType> = ({color, setColor}) => {
  return (
    <input
      type="color"
      value={color}
      className={styles.picker}
      onChange={e => setColor(e.target.value)}
    />
  );
}

export default ColorPicker