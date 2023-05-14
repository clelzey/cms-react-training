import Image from "next/image"
import styles from '../page.module.css'
import comicStyles from "../styles/Comics.module.css" 
import { useState } from "react"
import Detail from "./Subcomponents/Detail"
import classnames from "classnames"
import { Button } from "./Subcomponents/Button"

export default function Comic( props : Issue ) {
  // const [ isFavorite, setIsFavorite ] = useState(false);
  const { title, issueNumber, publishDate, creators, thumbnail } = props;
  let creatorsDetail = []
  creators.map(creator => {
    creatorsDetail.push(creator.name); 
    }
  )

  const options = { 
    month: "long",
    day: "numeric",
    year: "numeric" };
  const pubDate = new Date(publishDate);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(pubDate);


  return(
    <div className={classnames(styles.card, comicStyles.card)}>
      <div className={classnames(comicStyles.imgCont)}>
        <Image src={thumbnail} width={183} height={276} alt="" />
        <Button />
      </div>
      <div>
        <h3>{title}</h3>
        <Detail tag="Issue" info={issueNumber} />
        <Detail tag="Published" info={formattedDate} />
        <Detail tag="Creators" info={creatorsDetail.join(", ")} />
      </div>
    </div>
  )
}

interface Issue {
  title : string
  issueNumber: number
  publishDate: string
  creators: object[]
  thumbnail: string
}