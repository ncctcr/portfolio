import styles from './Modal.module.css'
import Tilt from 'react-parallax-tilt';
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import {useSelector} from 'react-redux'
import useScreenSize from "../../hooks/useScreenSize";
import {TABLET_WIDTH} from "../../constants";

const Modal = () => {
  // const parallaxMode = useSelector((state: any) => state.settings.parallaxMode)
  const fullscreenMode = useSelector((state: any) => state.settings.fullscreenMode)
  const screenSize = useScreenSize()
  const isMobile = screenSize.width <= TABLET_WIDTH

  return (
    // <Tilt
    //   className={`${styles.tilt} ${fullscreenMode ? styles.fullscreen : ''}`}
    //   scale={1}
    //   perspective={3500}
    //   tiltMaxAngleX={8}
    //   tiltMaxAngleY={8}
    //   transitionSpeed={800}
    //   tiltEnable={parallaxMode}
    //   reset={false}
    // >
    //   <Sidebar/>
    //   <Content/>
    // </Tilt>
    <div className={`${styles.tilt} ${fullscreenMode ? styles.fullscreen : ''}`}>
      {isMobile ? null : <Sidebar/>}
      <Content/>
    </div>
  )
}

export default Modal
