import React, { useContext } from "react";
import { ComicsGrid } from "../Comics/ComicsGrid";
import Context, { AppContextInterface } from "../../context/index-store";
import homeStyles from "../../styles/Home/Home.module.css";
import classnames from "classnames";

export const Content = () => {
    const context = useContext<AppContextInterface>(Context);

    return (
        <>
            <main className={classnames(homeStyles.main)}>
                {context.isLoading && <h1>Loading comics...</h1>}
                {context.hasError && (
                    <p>
                        Something went wrong. Unable to retrieve comics.
                        {context.hasError}
                    </p>
                )}
                {!context.isLoading &&
                    !context.hasError &&
                    context.isSuccess && <ComicsGrid />
                }
            </main>
        </>
    )
}