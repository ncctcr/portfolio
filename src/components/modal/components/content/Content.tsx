import styles from './Content.module.css'
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import {removeHistoryKey, setCurrentKey, setHistoryKey} from "../../../../redux/actions/dataActions";
import {IView} from "../../../../interfaces";
const Content = () => {
  const dispatch = useDispatch()
  const [currentView, setCurrentView] = useState<IView | null>(null)
  const currentKey = useSelector((state: any) => state.data.currentKey)
  const historyKeys = useSelector((state: any) => state.data.historyKeys)
  const views = useSelector((state: any) => state.data.views)

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
    dispatch(setHistoryKey(key))
  }

  const handleBack = () => {
    dispatch(removeHistoryKey())
  }

  return (
    <div className={styles.wrapper}>
      <Header onClick={handleBack}/>
      <Body view={currentView} onClick={handleClick}/>
    </div>
  )
}

export default Content