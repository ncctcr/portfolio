import styles from './Language.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeLanguageAction} from "../../../../../../../../redux/actions/settingsActions";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import i18n from "../../../../../../../../translations/i18n";

const Language = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const language = useSelector((state: any) => state.settings.language)

  const handleLanguage = (key: string) => {
    dispatch(changeLanguageAction(key))
  }

  useEffect(() => {
    i18n.changeLanguage(language, (err) => {
      if (err) return console.log('something went wrong loading language', err);
    });
  }, [language]);


  return (
    <div className={styles.block}>
      <div
        className={styles.item}
        onClick={() => handleLanguage('en')}
      >
        {t('english')}
      </div>
      <div
        className={styles.item}
        onClick={() => handleLanguage('ua')}
      >
        {t('ukrainian')}
      </div>
    </div>
  )
}

export default Language