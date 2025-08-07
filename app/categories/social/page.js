import styles from '../category.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Social</h1>
        <p className='spep'>Social media help us to connect with other <b>Developers</b></p>
        <br />
        <div className={styles.categories}>
          <Link href="https://github.com" className={styles.card}>
            <img src="/github.svg" alt="logo" />
            <h3>GitHub</h3>
          </Link>
          <Link href="https://dev.to" className={styles.card}>
            <img src="/dev.svg" alt="logo" />
            <h3>Dev.to</h3>
          </Link>
          <Link href="https://hashnode.com" className={styles.card}>
            <img src="/hashnode.svg" alt="logo" />
            <h3>Hashnode</h3>
          </Link>
          <Link href="https://stackoverflow.com" className={styles.card}>
            <img src="/stackoverflow.svg" alt="logo" />
            <h3>Stack Overfow</h3>
          </Link>
          <Link href="https://linkedin.com" className={styles.card}>
            <img src="/linkedin.svg" alt="logo" />
            <h3>LinkedIn</h3>
          </Link>
          <Link href="https://x.com" className={styles.card}>
            <img src="/x.svg" alt="logo" />
            <h3>Twitter / X</h3>
          </Link>
          <Link href="https://twitch.com" className={styles.card}>
            <img src="/twitch.svg" alt="logo" />
            <h3>Twitch</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}