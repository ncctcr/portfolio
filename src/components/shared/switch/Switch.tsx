
import styles from './Switch.module.css'
import {FC} from "react";

type PropsType = {
  checked: boolean;
  onClick: () => void
  disabled?: boolean
}

const Switch: FC<PropsType> = ({checked, onClick, disabled = false}) => {
  return (
    <label className={styles.formSwitch}>
        <input type="checkbox" checked={checked} onClick={onClick} disabled={disabled}/>
        <i></i>
    </label>
  )
}

export default Switch