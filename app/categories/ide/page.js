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
          <Link href="https://code.visualstudio.com/" className={styles.card}>
            <img src="/vsc.svg" alt="logo" />
            <h3>VS Code</h3>
          </Link>
          <Link href="https://codepen.io/" className={styles.card}>
            <img src="/codepen.svg" alt="logo" />
            <h3>CodePen</h3>
          </Link>
          <Link href="https://replit.org" className={styles.card}>
            <img src="/replit.svg" alt="logo" />
            <h3>Replit</h3>
          </Link>
          <Link href="https://stackblitz.com" className={styles.card}>
            <img src="/stackblitz.svg" alt="logo" />
            <h3>Stackblitz</h3>
          </Link>
          <Link href="https://sublimetext.com" className={styles.card}>
            <img src="/sublime.svg" alt="logo" />
            <h3>Sublime Text</h3>
          </Link>
          <Link href="https://atom-editor.cc" className={styles.card}>
            <img src="/atom.svg" alt="logo" />
            <h3>Atom</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}