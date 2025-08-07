import styles from '../category.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Deployment</h1>
        <p className='spep'>Deploy your <b>Web-Based</b> projects and make them visible to public</p>
        <br />
        <div className={styles.categories}>
          <Link href="https://vercel.com" className={styles.card}>
            <img src="/vercel.png" alt="logo" />
            <h3>Vercel</h3>
          </Link>
          <Link href="https://netlify.com" className={styles.card}>
            <img src="/netlify.svg" alt="logo" />
            <h3>Netlify</h3>
          </Link>
          <Link href="https://pages.github.com" className={styles.card}>
            <img src="/github.svg" alt="logo" />
            <h3>GitHub Pages</h3>
          </Link>
          <Link href="https://render.com" className={styles.card}>
            <img src="/render.svg" alt="logo" />
            <h3>Render</h3>
          </Link>
          <Link href="https://cloudflare.com" className={styles.card}>
            <img src="/cloudflare.svg" alt="logo" />
            <h3>CloudFlare</h3>
          </Link>
          <Link href="https://surge.sh" className={styles.card}>
            <img src="/surge.svg" alt="logo" />
            <h3>Surge.sh</h3>
          </Link>
          <Link href="https://railway.com" className={styles.card}>
            <img src="/railway.svg" alt="logo" />
            <h3>Railway</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}