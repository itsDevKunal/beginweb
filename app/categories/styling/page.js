import styles from '../category.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Stying</h1>
        <p className='spep'>Less effort, yet more beautiful.</p>
        <br />
        <div className={styles.categories}>
          <Link href="https://tailwindcss.com" className={styles.card}>
            <img src="/tailwind.svg" alt="logo" />
            <h3>Tailwind</h3>
          </Link>
          <Link href="https://getbootstrap.com" className={styles.card}>
            <img src="/bootstrap.svg" alt="logo" />
            <h3>Bootstrap</h3>
          </Link>
          <Link href="https://mui.com" className={styles.card}>
            <img src="/mui.svg" alt="logo" />
            <h3>Material UI</h3>
          </Link>
          <Link href="https://heroicons.com" className={styles.card}>
            <img src="/heroicons.svg" alt="logo" />
            <h3>Heroicons</h3>
          </Link>
          <Link href="https://reactbits.dev" className={styles.card}>
            <img src="/reactbits.png" alt="logo" />
            <h3>Reactbits</h3>
          </Link>
          <Link href="https://bulma.io" className={styles.card}>
            <img src="/bulma.svg" alt="logo" />
            <h3>Bulma</h3>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <Link className={styles.returnbtn} href="/">&lt; Back</Link>
    </main>
  )
}