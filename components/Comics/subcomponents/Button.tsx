import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import classes from '../../../styles/Comics/Button.module.css'
import React, { useContext } from 'react';
import Context, { AppContextInterface } from '../../../context/index-store';
import { ComicData } from '../../../interfaces/shared_interfaces';

interface ButtonProps  {
    comicData: ComicData;
    alreadyInFavorites: ComicData;
    disableButton: boolean;
}



export const Button = ({
    comicData,
    alreadyInFavorites,
    disableButton,
}: ButtonProps) =>{
    const context = useContext<AppContextInterface>(Context);

    const addToFavorites = () => {
        console.log(`Adding ${comicData.id} to favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorties: ComicData[] = [...prevFavorites, { ...comicData }];
            localStorage.setItem(
                "favorite_comics",
                JSON.stringify(newFavorties)
            );
            return newFavorties;
        });
    };

    const removeFromFavorites = () => {
        console.log(`Removing ${comicData.id} from favorites`);
        context.setFavorites((prevFavorites) => {
            const newFavorties: ComicData[] = [...prevFavorites];
            const index: number = prevFavorites.findIndex((favorite) => {
                return favorite.id === comicData.id;
            });
            newFavorties.splice(index, 1);
            localStorage.setItem(
                "favorite_comics",
                JSON.stringify(newFavorties)
            );
            return newFavorties;
        });
    };

    return (
        <button className={`${classes["button"]} ${
            alreadyInFavorites && classes["button--favorited"]
            }`}
            onClick={alreadyInFavorites ? removeFromFavorites : addToFavorites}
            disabled={disableButton && !alreadyInFavorites}
        >
            <FontAwesomeIcon icon={faBoltLightning} className={classes['bolt']} /></button>
    );
}