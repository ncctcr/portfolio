import styles from './Body.module.css'
import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Theme from "./components/theme/Theme";
import Window from "./components/window/Window";
import {IView} from "../../../../../../interfaces";
import {useTranslation} from "react-i18next";
import Language from "./components/language/Language";

type PropsType = {
  view: IView | null;
  onClick: (key: string) => void
}

const Body: FC<PropsType> = ({ view, onClick}) => {
  const { t } = useTranslation()
  const getContent = (view: IView | null) => {
    if (view && view.content && view.content.length > 0) {
      return view.content.map((i, index) => {
        return (
          <div key={index}>
            <div className={styles.title}>{t(i.key)}</div>
            <div className={styles.block}>
              <div className={styles.item} style={{cursor: 'text'}}>
                {i.text}
                {i.innerHTML ? (
                  <div dangerouslySetInnerHTML={{__html: i.innerHTML}}></div>
                ) : null}
              </div>
            </div>
          </div>
        )
      })
    }
    return null
  }

  const getLinks = (view: IView | null) => {
    if (view && view.block_links && view.block_links.length > 0) {
      return view.block_links.map((i, indexBlock: number) => (
        <div key={indexBlock}>
          <div className={styles.title}>{t(i.key)}</div>
          <div className={styles.block}>
            {i.links && i.links.map((link, indexLink: number) => (
              <div className={styles.item} key={indexLink} onClick={() => onClick(link.key)}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  {link.icon ? (
                    <img
                      src={link.icon}
                      width={25}
                      height={25}
                      style={{objectFit: 'cover', marginRight: 10}}/>
                  ) : null}
                  <span>{t(link.key)}</span>
                </div>
                <FontAwesomeIcon icon={faAngleRight}/>
              </div>
            ))}
          </div>
        </div>
      ))
    }
    return null
  }

  return (
    <div className={styles.wrapper}>
      {view && view.key === 'theme' ? <Theme/> : null}
      {view && view.key === 'window' ? <Window /> : null}
      {view && view.key === 'language' ? <Language /> : null}
      {getContent(view)}
      {getLinks(view)}
    </div>
  )
}

export default Body