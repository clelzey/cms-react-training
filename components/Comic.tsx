import Image from "next/image"
// import styles from '../page.module.css'
import comicStyles from "../styles/Comics.module.css" 
import { useState } from "react"
import { Detail } from "./subcomponents/Detail"
import classnames from "classnames"
import { Button } from "./subcomponents/Button"
import React from "react"
import { ComicData } from "@/interfaces/shared_interfaces"

interface ComicDataProps {
    comicData: ComicData
}

export default function Comic( { comicData } : ComicDataProps ) {
  // const [ isFavorite, setIsFavorite ] = useState(false);
    let creatorsDetail = []
    comicData.creators.items.map(creator=> {
        creatorsDetail.push(creator.name); 
        }
    )

    const pubDate = new Date(comicData.dates[0].date);
    const formattedDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" } ).format(pubDate);

    return(
        <div className={classnames(comicStyles.card)}>
        <div className={classnames(comicStyles.imgCont)}>
            <Image 
                src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}
                width={183}
                height={276}
                alt={comicData.title} 
            />
            <Button />
        </div>
        <div>
            <h3>{comicData.title}</h3>
            <Detail tag="Issue" info={comicData.issueNumber} />
            <Detail tag="Published" info={formattedDate} />
            <Detail tag="Creators" info={creatorsDetail.join(", ")} />
        </div>
        </div>
    )
}
