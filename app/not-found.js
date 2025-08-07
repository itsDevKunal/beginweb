import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.notFound}>
        <h1>404, Not Found :(</h1>
        <p>Wrong location! Page is either not created or under development</p>
        <Link className={styles.returnbtn} href="/">Return Home</Link>
      </div>
    </main>
  );
}