import styles from './WindowButtons.module.css'
import {setFullscreenMode} from "../../../../../../redux/actions/settingsActions";
import {useDispatch, useSelector} from "react-redux";

const WindowButtons = () => {
  const dispatch = useDispatch()
  const fullscreenMode = useSelector((state: any) => state.settings.fullscreenMode)

  const toggleFullscreenMode = () => {
    dispatch(setFullscreenMode(!fullscreenMode))
  }

  const handleClose = () => {
    const confirmed = window.confirm('Do you really want to close the tab?');
    if (confirmed) {
      window.close();
    }
  };

  return (
    <div className={styles.buttons}>
      <div className={styles.circle} onClick={() => handleClose()} style={{background: '#ff6057'}}></div>
      <div className={styles.circle} style={{background: '#fabe31'}}></div>
      <div className={styles.circle} onClick={toggleFullscreenMode} style={{background: '#2ac73f'}}></div>
    </div>
  )
}

export default WindowButtons