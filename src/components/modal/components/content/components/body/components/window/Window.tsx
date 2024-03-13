import styles from './Window.module.css'
import Switch from "../../../../../../../shared/switch/Switch";
import {useDispatch, useSelector} from 'react-redux'
import {setParallaxMode} from "../../../../../../../../redux/actions/settingsActions";
const Window = () => {
  const dispatch = useDispatch()
  const parallaxMode = useSelector((state: any) => state.settings.parallaxMode)


  const toggleParallaxMode = () => {
    dispatch(setParallaxMode(!parallaxMode))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.item}>
          <span>Parallax mode</span>
          <Switch onClick={toggleParallaxMode} checked={parallaxMode}/>
        </div>
      </div>
    </div>
  )
}

export default Window