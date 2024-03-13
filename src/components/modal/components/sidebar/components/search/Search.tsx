import styles from './Search.module.css'
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
      <input type='text' placeholder={t('search')} maxLength={30} className={styles.input}/>
    </div>
  )
}

export default Search