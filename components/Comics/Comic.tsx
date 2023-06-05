import Image from "next/image"
import React,{ useContext } from "react"
import Context, { AppContextInterface} from "../../context/index-store"
import classnames from "classnames"
import { Detail } from "./subcomponents/Detail"
import { Button } from "./subcomponents/Button"
import { ComicData } from "../../interfaces/shared_interfaces"
import comicStyles from "../../styles/Comics/Comics.module.css" 


interface ComicDataProps {
    comicData: ComicData
}

export default function Comic( { comicData } : ComicDataProps ) {
    const context = useContext<AppContextInterface>(Context);

    if (!comicData) {
        return null;
    }

    const alreadyInFavorites: ComicData = context.favorites.find(
        (favorites) => favorites.id === comicData.id
    );

    const favoriteLimitHasBeenReached: boolean = context.favorites.length >= 10;

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
                <Button 
                    comicData={comicData}
                    alreadyInFavorites={alreadyInFavorites}
                    disableButton={favoriteLimitHasBeenReached}
                />
            </div>
            <div className={classnames(comicStyles.comic__details)}>
                <h3>{comicData.title}</h3>
                <Detail tag="Issue" info={comicData.issueNumber} />
                <Detail tag="Published" info={formattedDate} />
                {creatorsDetail.length > 0 && <Detail tag="Creators" info={creatorsDetail.slice(0, 2).join(", ")} />}
            </div>
        </div>
    )
}
