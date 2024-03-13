import styles from './Language.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeLanguageAction} from "../../../../../../../../redux/actions/settingsActions";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import i18n from "../../../../../../../../translations/i18n";
import {ICONS} from "../../../../../../../../constants";

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

  const addBackgroundImageRecursively = (element: HTMLElement | null): void => {
    if (element && element.nodeType === 1) {
      (element as HTMLElement).style.backgroundImage = `url(${ICONS.KACAP})`;
    }

    if (element?.children && element.children.length > 0) {
      // @ts-ignore
      for (const child of element.children) {
        addBackgroundImageRecursively(child as HTMLElement);
      }
    }
  };

  const handleKacap = () => {
    const allDivs = document.getElementsByTagName('div');
      // @ts-ignore
      for (const div of allDivs) {
        addBackgroundImageRecursively(div as HTMLElement);
      }
  }

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
      <div
        className={styles.item}
        onClick={() => handleKacap()}
      >
        {t('russian')}
      </div>
    </div>
  )
}

export default Language