import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useRequest from '@/hooks/use-request'
import Comic from '../components/Comic'
import { ComicData } from '@/interfaces/shared_interfaces'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    getMarvelComicsResourceUrl,
    fetchData,
    isLoading,
    setIsLoading,
    isSuccess,
    setIsSuccess,
    hasError,
    setHasError,
  } = useRequest();
  const [comics, setComics] = useState<ComicData[]>([]);

  useEffect(() => {
      fetchData({ endpoint: getMarvelComicsResourceUrl() })
          .then((data) => {
              console.log(data);
              setComics(data.data.results);
              setIsLoading(false);
              setIsSuccess(true);
          })
          .catch((error) => {
              setHasError(error);
              setIsSuccess(false);
              setIsLoading(false);
          });
  }, []);

  return (
    <>
      <Head>
        <title>Christy's Commic Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {isLoading && <h1>Loading comics...</h1>}
        {hasError && (
            <p>
                Something went wrong. Unable to retrieve comics.
                {hasError}
            </p>
        )}
        {!isLoading && !hasError && isSuccess && (
          <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(183px, 1fr))",
              gap: "60px 26px",
              width: "100%"
            }}>
            {comics.map((comic) => {
              return (
                <Comic key={comic.id} comicData={comic} />
              )
            })}
          </div>
        )}
      </main>
    </>
  )
}
