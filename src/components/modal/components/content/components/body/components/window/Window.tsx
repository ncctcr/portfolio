import styles from './Window.module.css'
import Switch from "../../../../../../../shared/switch/Switch";
import {useDispatch, useSelector} from 'react-redux'
import {setFullscreenMode, setParallaxMode} from "../../../../../../../../redux/actions/settingsActions";
const Window = () => {
  const dispatch = useDispatch()
  const parallaxMode = useSelector((state: any) => state.settings.parallaxMode)
  const fullscreenMode = useSelector((state: any) => state.settings.fullscreenMode)


  const toggleParallaxMode = () => {
    dispatch(setParallaxMode(!parallaxMode))
  }

  const toggleFullscreenMode = () => {
    dispatch(setFullscreenMode(!fullscreenMode))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        {/*<div className={styles.item}>*/}
        {/*  <span>Parallax mode</span>*/}
        {/*  <Switch onClick={toggleParallaxMode} checked={parallaxMode} disabled={fullscreenMode}/>*/}
        {/*</div>*/}
        <div className={styles.item}>
          <span>Fullscreen mode</span>
          <Switch onChange={toggleFullscreenMode} checked={fullscreenMode}/>
        </div>
      </div>
    </div>
  )
}

export default Window