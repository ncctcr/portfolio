import styles from './WindowButtons.module.css'

const WindowButtons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.circle} style={{background: '#ff6057'}}></div>
      <div className={styles.circle} style={{background: '#fabe31'}}></div>
      <div className={styles.circle} style={{background: '#2ac73f'}}></div>
    </div>
  )
}

export default WindowButtons