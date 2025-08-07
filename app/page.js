import Categories from '@/components/categories'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1>Hello, World!</h1>
        <p>Finding the online tools and more, we <b>Developers</b> use in daily life to make our work easy?</p>
        <p>You are on the right place!</p>
        <p>Scroll down and explore our Developer's world.</p>
      </div>
      <br />
      <div className={styles.categories}>
        <h1>Categories</h1>
        <p className='spep'>Explore various categories of tools and resources.</p>
        <br />
        <Categories />
      </div>
      <div className={styles.beyond}>
        <h1>Why it Matters?</h1>
        <br />
        <p>Ever wonder what tools real developers use every day? It’s these. They’re not just cool—they’re practical, powerful, and used in everything from personal portfolios to billion-user platforms. Learn them now, and you’ll thank yourself later.</p>
        <br />
        <p>The tools listed above aren’t just popular—they’re trusted by professional developers around the world. They simplify your workflow, boost your productivity, and help you build real-world projects faster. From writing clean code to deploying your site in seconds, these tools form the foundation of modern web development. Whether you're just starting out or growing into a pro, learning these now means you're building the right habits from day one.</p>
        <br />
        <p>These tools are your gateway into the real world of development. They’re not shortcuts—they’re the standard. Senior developers use them daily to build apps for millions. Mastering them early means you’re not just learning to code—you’re learning to build like a pro.</p>
      </div>
    </main>
  )
}