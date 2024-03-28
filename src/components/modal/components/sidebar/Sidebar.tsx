import styles from './Sidebar.module.css'
import {useState} from "react";
import WindowButtons from "./components/window-buttons/WindowButtons";
import Search from "./components/search/Search";
import Item from "./components/item/Item";
import Account from "./components/account/Account";
import {ACCOUNT, SIDEBAR} from "../../../../constants";
import {BrowserView} from 'react-device-detect';

const Sidebar = () => {
  const [initialPos, setInitialPos] = useState<any>(null);
  const [initialSize, setInitialSize] = useState<any>(null);

  const initial = (e: React.DragEvent<HTMLDivElement>) => {
    const resizable = document.getElementById('Resizable') as HTMLElement;
    setInitialPos(e.clientX);
    setInitialSize(resizable.offsetWidth);
  }

  const resize = (e: React.DragEvent<HTMLDivElement>) => {
    const resizable = document.getElementById('Resizable') as HTMLElement;
    resizable.style.width = `${parseInt(initialSize) + (e.clientX - initialPos)}px`;
  }

  return (
    <BrowserView className={styles.block}>
      <div id='Resizable' className={styles.resizable}>
        <div className={styles.header}>
          <WindowButtons/>
          <Search/>
          <Account data={ACCOUNT}/>
        </div>
        <div className={styles.content}>
          {SIDEBAR.length > 0 ? (
            SIDEBAR.map((item, index) => (
              <div key={index}>
                <Item dataKey={item.key} icon={item.icon}/>
                {item.br && <br/>}
              </div>
            ))
          ) : null}
        </div>
      </div>
      <div id='Draggable'
           className={styles.draggable}
           draggable='true'
           onDragStart={initial}
           onDrag={resize}
      />
    </BrowserView>
  )
}

export default Sidebar