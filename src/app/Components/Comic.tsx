import Image from "next/image"
import styles from '../page.module.css'

export default function Comic(mydata) {
    
    return(
      <div className={styles.card}>
        {mydata.title}
      </div>
    )
  }