import styles from './Card.module.scss'

export default function Card() {
  return (
    <>
      <div className={styles.card}>
        Made with <img src="/static/img/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
      </div>
    </>
  )
}
