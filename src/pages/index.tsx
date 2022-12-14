import BackgroundScene from '@src/components/BackgroundScene';
import ThemeSelector from '@src/components/common/ThemeSelector';
import ProjectSection from '@src/components/ProjectSection';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matthieu Daulhiac - Blockchain & Front-End Engineer</title>
        <meta
          name="description"
          content="Matthieu Daulhiac, personal portolio for blockchain and web projects, including NFTs, smart contract development and front-end development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BackgroundScene />
        <ThemeSelector />
        <ProjectSection />
      </main>
    </div>
  );
}
