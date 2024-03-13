import styles from './Theme.module.css'
import {changeBlobColor, changeThemeAction} from "../../../../../../../../redux/actions/settingsActions";
import {useDispatch, useSelector} from 'react-redux';
import Switch from "../../../../../../../shared/switch/Switch";
import ColorPicker from "../../../../../../../shared/color-picker/ColorPicker";
import {useTranslation} from "react-i18next";
const Theme = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.settings.theme);
  const color = useSelector((state: any) => state.settings.blobColor);

  const toggleTheme = () => {
    dispatch(changeThemeAction(theme === 'light' ? 'dark' : 'light'));
  };

  const setBlobColor = (color: string) => {
    dispatch(changeBlobColor(color));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.item}>
          <span>{t('dark_mode')}</span>
          <Switch onClick={toggleTheme} checked={theme === 'dark'}/>
        </div>
        <div className={styles.item}>
          <span>{t('blob_color')}</span>
          <ColorPicker color={color} setColor={setBlobColor}/>
        </div>
      </div>
    </div>
  )
}

export default Theme