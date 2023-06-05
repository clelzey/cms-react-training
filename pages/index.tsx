import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Context from '../context/index-store'
import useRequest from '../hooks/use-request'
import { ComicData } from '../interfaces/shared_interfaces'
import { Layout } from '../components/Home/Layout'

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
  const [favorites, setFavorites] =useState<ComicData[]>([]);

  useEffect(() => {
    const favoriteComics = localStorage.getItem("favorite_comics");
    if (favoriteComics) {
      setFavorites(JSON.parse(favoriteComics));
    }
  }, []);

  useEffect(() => {
      fetchData({ 
        endpoint: getMarvelComicsResourceUrl(
          "https://gateway.marvel.com/v1/public/comics?"
        ), 
      })
          .then((data) => {
              // console.log(data);
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

  const ctx = {
    comics,
    setComics,
    favorites,
    setFavorites,
    isLoading,
    setIsLoading,
    isSuccess,
    setIsSuccess,
    hasError,
    setHasError,
    fetchData,
    getMarvelComicsResourceUrl
  };

  return (
    <>
      <Head>
        <title>Christy's Commic Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Context.Provider value={ctx}>
        <Layout />
      </Context.Provider>
    </>
  )
}
