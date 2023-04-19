import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import comics from './Data/data.json'

import Comic from './Components/Comic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.grid}>
        {comics.map((comic) => {
          return (
            <Comic key={comic.id} {...comic} />
          )
        })}
        </div>
      </div>
    </main>
  )
}

