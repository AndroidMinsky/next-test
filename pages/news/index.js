import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function News() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>News Page</h1>
        <ul>
          <li>
            <Link href="news/test">NextJS Article</Link>
          </li>
          <li>
            <Link href="news/anothertest">Something Else</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
