import Head from 'next/head';
import appConfig from '@config';
import styles from '../styles/pages/_Home.module.scss';

export default function Home() {
  const instagramUrl = appConfig.socialLinks.instagramUrl;

  return (
    <>
      <Head>
        <title>Inside Cal Poly | Follow us on Instagram</title>
        <meta
          name="description"
          content="We’re no longer updating this blog. Follow Inside Cal Poly on Instagram for the latest news and updates."
        />
      </Head>
      <main className={styles.page}>
        <section className={styles.content} aria-labelledby="home-title">
          <p className={styles.eyebrow}>Inside Cal Poly</p>
          <h1 id="home-title">Looking for the latest A&amp;F updates?</h1>
          <p className={styles.description}>
            We’re no longer updating this blog. Follow us on Instagram at{' '}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              instagram.com/insidecalpoly
            </a>{' '}
            for the latest news and updates. Thank you!
          </p>
          <a
            className={styles.link}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @insidecalpoly
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </>
  );
}
