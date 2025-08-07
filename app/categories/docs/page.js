import styles from '../category.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Learning</h1>
        <p className='spep'>Learn what you don't know. Enhance what you know.</p>
        <br />
        <div className={styles.categories}>
          <Link href="https://developer.mozilla.org/en-US/" className={styles.card}>
            <img src="/mdn.svg" alt="logo" />
            <h3>MDN</h3>
          </Link>
          <Link href="https://w3schools.com" className={styles.card}>
            <img src="/w3school.svg" alt="logo" />
            <h3>w3Schools</h3>
          </Link>
          <Link href="https://freecodecamp.org" className={styles.card}>
            <img src="/fcc.svg" alt="logo" />
            <h3>freeCodeCamp</h3>
          </Link>
          <Link href="https://roadmap.sh" className={styles.card}>
            <img src="/roadmap.svg" alt="logo" />
            <h3>Roadmap.sh</h3>
          </Link>
          <Link href="https://javascript.info" className={styles.card}>
            <img src="/jsinfo.svg" alt="logo" />
            <h3>Javascript.Info</h3>
          </Link>
          <Link href="https://geeksforgeeks.org" className={styles.card}>
            <img src="/gfg.svg" alt="logo" />
            <h3>GeeksForGeeks</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}