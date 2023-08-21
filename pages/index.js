import Head from 'next/head';
import { Sidebar } from '../components/Sidebar';
import { Center } from '../components/Center';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hiddenS">
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}
