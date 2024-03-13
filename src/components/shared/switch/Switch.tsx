
import styles from './Switch.module.css'
import {FC} from "react";

type PropsType = {
  checked: boolean;
  onClick: () => void
}

const Switch: FC<PropsType> = ({checked, onClick}) => {
  return (
    <label className={styles.formSwitch}>
        <input type="checkbox" checked={checked} onClick={onClick}/>
        <i></i>
    </label>
  )
}

export default Switch