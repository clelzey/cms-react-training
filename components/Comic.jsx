import Image from "next/image"
// import styles from '../page.module.css'
import comicStyles from "../styles/Comics.module.css" 
import { useState } from "react"
import { Detail } from "./Subcomponents/Detail"
import classnames from "classnames"
import { Button } from "./Subcomponents/Button"

export default function Comic( props ) {
  // const [ isFavorite, setIsFavorite ] = useState(false);
    const { title, issueNumber, dates, creators, thumbnail } = props;
    let creatorsDetail = []
    creators.items.map(creator => {
        creatorsDetail.push(creator.name); 
        }
    )
    const options = { 
        month: "long",
        day: "numeric",
        year: "numeric" };
    const pubDate = new Date(dates[0].date);
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(pubDate);

    return(
        <div className={classnames(comicStyles.card)}>
        <div className={classnames(comicStyles.imgCont)}>
            <Image 
                src={`${thumbnail.path}.${thumbnail.extension}`}
                width={183}
                height={276}
                alt={title} 
            />
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