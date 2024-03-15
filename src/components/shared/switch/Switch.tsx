import styles from './Switch.module.css'
import {FC} from "react";

type PropsType = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const Switch: FC<PropsType> = ({checked, onChange, disabled = false}) => {
  return (
    <label className={styles.formSwitch}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled}/>
      <i></i>
    </label>
  )
}

export default Switch;
