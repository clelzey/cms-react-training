import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import comics from './Data/data.json'

import Comic from './Components/Comic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(183px, 1fr))",
          gap: "60px 26px",
          width: "100%"
        }}>
        {comics.map((comic) => {
          return (
            <Comic key={comic.id} {...comic} />
          )
        })}
      </div>
    </main>
  )
}

