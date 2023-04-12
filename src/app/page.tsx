import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import data from './Data/data.json'

import Comic from './Components/Comic'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mydata = data[0].title;
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>My own info</h1>
        <Comic mydata={mydata} />
      </div>
    </main>
  )
}

