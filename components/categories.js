import styles from './styles/categories.module.css';
import Link from 'next/link';

export default function Categories() {
  return (
    <div className={styles.categories}>
      <Link href="/categories/social" className={styles.card}>
        <img src="social.svg" alt="logo" />
        <h3>Social</h3>
      </Link>
      <Link href="/categories/deploy" className={styles.card}>
        <img src="deploy.svg" alt="logo" />
        <h3>Deployment</h3>
      </Link>
      <Link href="/categories/docs" className={styles.card}>
        <img src="docs.svg" alt="logo" />
        <h3>Documentation</h3>
      </Link>
      <Link href="/categories/ide" className={styles.card}>
        <img src="ide.svg" alt="logo" />
        <h3>IDE</h3>
      </Link>
      <Link href="/categories/styling" className={styles.card}>
        <img src="styling.svg" alt="logo" />
        <h3>Styling</h3>
      </Link>
      <Link href="/categories/prototyping" className={styles.card}>
        <img src="prototype.svg" alt="logo" />
        <h3>Prototyping</h3>
      </Link>
    </div>
  )
}