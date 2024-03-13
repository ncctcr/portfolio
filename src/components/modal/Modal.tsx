import styles from './Modal.module.css'
import Tilt from 'react-parallax-tilt';
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import {useSelector} from 'react-redux'

const Modal = () => {
  const parallaxMode = useSelector((state: any) => state.settings.parallaxMode)

  return (
    <Tilt
      className={styles.tilt}
      scale={1}
      perspective={3500}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      transitionSpeed={800}
      tiltEnable={parallaxMode}
      reset={false}
    >
      <Sidebar/>
      <Content/>
    </Tilt>
  )
}

export default Modal
