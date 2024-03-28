import styles from './Theme.module.css'
import {
  changeBlobBlur,
  changeBlobColor, changeBlobCount,
  changeThemeAction
} from "../../../../../../../../redux/actions/settingsActions";
import {useDispatch, useSelector} from 'react-redux';
import Switch from "../../../../../../../shared/switch/Switch";
import ColorPicker from "../../../../../../../shared/color-picker/ColorPicker";
import {useTranslation} from "react-i18next";
import {Slider} from "@mui/material";
import useScreenSize from "../../../../../../../../hooks/useScreenSize";
import {TABLET_WIDTH} from "../../../../../../../../constants";
const Theme = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.settings.theme);
  const color = useSelector((state: any) => state.settings.blob.color);
  const blur = useSelector((state: any) => state.settings.blob.blur);
  const blobCount = useSelector((state: any) => state.settings.blob.count);
  const screenSize = useScreenSize()
  const isMobile = screenSize.width <= TABLET_WIDTH

  const toggleTheme = () => {
    dispatch(changeThemeAction(theme === 'light' ? 'dark' : 'light'));
  };

  const handleBlobColor = (color: string) => {
    dispatch(changeBlobColor(color));
  };

  const handleBlobBlur = (value: number) => {
    dispatch(changeBlobBlur(value));
  };

  const handleBlobCount = (value: number) => {
    dispatch(changeBlobCount(value));
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.item}>
          <span>{t('dark_mode')}</span>
          <Switch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
        {!isMobile ? (
          <>
            <div className={styles.item}>
              <span>{t('blob_color')}</span>
              <ColorPicker color={color} setColor={handleBlobColor}/>
            </div>
            <div className={styles.item}>
              <span>Blob blur</span>
              <Slider
                aria-label="Blob blur"
                defaultValue={blur}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={10}
                marks
                min={0}
                max={100}
                value={blur}
                onChange={(e, value) => handleBlobBlur(value as number)}
                style={{maxWidth: 400}}
              />
            </div>
            <div className={styles.item}>
              <span>Blob count</span>
              <Slider
                aria-label="Blob count"
                defaultValue={blobCount}
                valueLabelDisplay="auto"
                shiftStep={2}
                step={2}
                marks
                min={0}
                max={20}
                value={blobCount}
                onChange={(e, value) => handleBlobCount(value as number)}
                style={{maxWidth: 400}}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Theme