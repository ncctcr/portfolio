import styles from './Account.module.css'
import {IAccount} from "../../../../../../interfaces";
import {FC} from "react";

type PropsType = {
  data: IAccount
}

const Account: FC<PropsType> = ({data}) => {
  return (
    <div className={styles.wrapper}>
      <img src={data.avatar}  alt='avatar'/>
      <div className={styles.information}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.position}>{data.position}</p>
      </div>
    </div>
  )
}

export default Account