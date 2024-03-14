import styles from './Item.module.css'
import {FC, useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {clearHistoryKeysAndSetKey} from "../../../../../../redux/actions/dataActions";
import {hexToRgba} from "../../../../../../utils";
import {useTranslation} from "react-i18next";

type PropsType = {
  dataKey: string;
  icon?: string
}

const Item: FC<PropsType> = ({dataKey, icon}) => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(false)
  const historyKeys = useSelector((state: any) => state.data.historyKeys)
  const blobColor = useSelector((state: any) => state.settings.blob.color)

  useEffect(() => {
    if (historyKeys.length > 0) {
      const isSelected = historyKeys.some((key: string) => key === dataKey)
      setSelected(isSelected)
    }
  }, [historyKeys]);

  const handleSelect = () => {
    dispatch(clearHistoryKeysAndSetKey(dataKey))
  }

  return (
    <div
      className={`${styles.item} ${selected ? styles.active : ''}`}
      style={{background: selected ? hexToRgba(blobColor, 0.25) : 'none'}}
      onClick={handleSelect}
    >
      {icon ? (
        <img
          src={icon}
          width={35}
          height={35}
          style={{objectFit: 'cover', marginRight: 10}}/>
      ) : (
        <div className={styles.icon}/>
      )}

      {t(dataKey)}
    </div>
  )
}

export default Item