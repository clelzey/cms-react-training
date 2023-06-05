import React, { useContext } from "react";
import classes from "../../styles/Comics/ComicsGrid.module.css";
import Context, { AppContextInterface } from "../../context/index-store";
import { Pagination } from "./Pagination";
import Comic from "./Comic";
import { usePagination } from "../../hooks/use-pagination";

export const ComicsGrid = () => {
    const context = useContext<AppContextInterface>(Context);
    const {
        currentPage,
        setCurrentPage,
        disableRightPagination,
        indexOfFirstComic,
        indexOfLastComic,
        currentComics,
        comics
    } = usePagination(context.comics);

    if (comics.length === 0) {
        return <p>No comics were found</p>;
    }

    return (
        <>
            <div className={`${classes["grid"]}`}>
                {currentComics.map((comic) => {
                    return <Comic key={comic.id} comicData={comic} />;
                })}
            </div>
            <Pagination
                range={{
                    start: indexOfFirstComic,
                    end: indexOfLastComic,
                }}
                totalNumberOfComics={comics.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                disableRightPagination={disableRightPagination}
            />
        </>
    );
};
