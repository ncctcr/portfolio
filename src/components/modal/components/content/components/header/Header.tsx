import styles from './Header.module.css'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC} from "react";
import { useSelector } from 'react-redux'
import {useTranslation} from "react-i18next";
import { motion } from "framer-motion";

type PropsType = {
  onClick: () => void
}

const Header: FC<PropsType> = ({onClick}) => {
  const { t } = useTranslation()
  const currentKey = useSelector((state: any) => state.data.currentKey);

  return (
    <motion.div
      key={currentKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.wrapper}>
        {currentKey !== 'general' ? (
          <button onClick={onClick} className={styles.back}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </button>
        ) : null}
        <p>{t(currentKey)}</p>
      </div>
    </motion.div>
  )
}

export default Header