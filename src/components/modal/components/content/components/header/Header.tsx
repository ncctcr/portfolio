import styles from './Header.module.css'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FC, useEffect, useState} from "react";
import { useSelector } from 'react-redux'
import {useTranslation} from "react-i18next";

type PropsType = {
  onClick: () => void
}

const Header: FC<PropsType> = ({onClick}) => {
  const { t } = useTranslation()
  const currentKey = useSelector((state: any) => state.data.currentKey);
  // const views = useSelector((state: any) => state.data.views)
  // const [title,setTitle] = useState('General')

  // useEffect(() => {
  //   const view = views.find((view: any) => view.key === currentKey)
  //   if (view) {
  //     setTitle(view.title)
  //   }
  // }, [currentKey]);

  return (
    <div className={styles.wrapper}>
      {currentKey !== 'general' ? (
        <button onClick={onClick}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
      ) : <div style={{width: '40px'}}/>}
      <p>{t(currentKey)}</p>
    </div>
  )
}

export default Header