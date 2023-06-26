import styles from "./styles.module.css";

export default function Home() {
  return (
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Mexico!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
          >
            <h3>Back &rarr;</h3>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Create &rarr;</h3>
          </a>
        </div>
      </main>
  )
}
