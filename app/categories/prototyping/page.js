import styles from '../category.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Protyping</h1>
        <p className='spep'>Make before executing <b>Web-Desiging</b>, a essential step.</p>
        <br />
        <div className={styles.categories}>
          <Link href="https://figma.com" className={styles.card}>
            <img src="/figma.svg" alt="logo" />
            <h3>Figma</h3>
          </Link>
          <Link href="https://canva.com" className={styles.card}>
            <img src="/canva.svg" alt="logo" />
            <h3>Canva</h3>
          </Link>
          <Link href="https://dribbble.com" className={styles.card}>
            <img src="/dribble.svg" alt="logo" />
            <h3>Dribbble</h3>
          </Link>
          <Link href="https://unsplash.com" className={styles.card}>
            <img src="/unsplash.svg" alt="logo" />
            <h3>Unsplash</h3>
          </Link>
          <Link href="https://flaticon.com" className={styles.card}>
            <img src="/flaticon.svg" alt="logo" />
            <h3>Flaticon</h3>
          </Link>
          <Link href="https://wordpress.com" className={styles.card}>
            <img src="/wp.svg" alt="logo" />
            <h3>Wordpress</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}