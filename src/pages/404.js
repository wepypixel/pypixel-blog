import Link from "next/link";
import styles from "../styles/404.module.css";
import Head from 'next/head'

export default function Custom404() {
  return (
    <div className={styles.container}>
        <Head>
            <title>404 - Page Not Found</title>
        </Head>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/" className={styles.link}>
        Go back home
      </Link>
    </div>
  );
}
