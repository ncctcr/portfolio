import styles from './Content.module.css'
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import {removeHistoryKey, setCurrentKey, setHistoryKey} from "../../../../redux/actions/dataActions";
import {IView} from "../../../../interfaces";
import { AnimatePresence } from "framer-motion";
import AnimatedView from "../../../shared/animated-view/AnimatedView";
import useScreenSize from "../../../../hooks/useScreenSize";
import {TABLET_WIDTH} from "../../../../constants";
import useSwipe from "../../../../hooks/useSwipe";

const Content = () => {
  const dispatch = useDispatch()
  const [currentView, setCurrentView] = useState<IView | null>(null)
  const currentKey = useSelector((state: any) => state.data.currentKey)
  const historyKeys = useSelector((state: any) => state.data.historyKeys)
  const views = useSelector((state: any) => state.data.views)
  const [isBackward, setIsBackward] = useState(false);
  const screenSize = useScreenSize()
  const isMobile = screenSize.width <= TABLET_WIDTH
  const [isFirstRender, setIsFirstRender] = useState(true)

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => {},
    onSwipedRight: () => {
      if (currentKey !== 'general') {
        handleBack()
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setIsFirstRender(false)
    }, 100)
  }, []);

  useEffect(() => {
    const view = views.find((i: any) => i.key === currentKey)
    if (view) {
      setCurrentView(view)
    }
  }, [currentKey]);

  useEffect(() => {
    if (historyKeys.length > 0) {
      const key = historyKeys[historyKeys.length - 1]
      dispatch(setCurrentKey(key))
    }
  }, [historyKeys]);

  const handleClick = (key: string) => {
    setIsBackward(false)
    dispatch(setHistoryKey(key))
  }

  const handleBack = () => {
    setIsBackward(true)
    dispatch(removeHistoryKey())
  }
  return (
    <div className={styles.wrapper} {...swipeHandlers}>
      <AnimatePresence>
        <Header onClick={handleBack} isBackward={isBackward}/>
      </AnimatePresence>
      <AnimatePresence mode={isMobile ? 'sync' : 'wait'} key='content' custom={isBackward}>
        <AnimatedView isFirstRender={isFirstRender} isBackward={isBackward} key={currentView ? currentView.key : 'empty'}>
          <Body view={currentView} onClick={handleClick}/>
        </AnimatedView>
      </AnimatePresence>
    </div>
  )
}

export default Content