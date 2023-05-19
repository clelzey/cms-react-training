import { useState } from "react";

const useRequest = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);

    const getMarvelComicsResourceUrl = () => {
        const serviceEndpoint = "https://gateway.marvel.com/v1/public/comics?";
        let timestamp = new Date().getTime();
        const hashInputData = `${timestamp}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PRIVATE}${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}`;
        const crypto = require("crypto");
        const hash = crypto
            .createHash("md5")
            .update(hashInputData)
            .digest("hex");
        const requestUrl = `${serviceEndpoint}ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_MARVEL_API_KEY_PUBLIC}&hash=${hash}`;
        return requestUrl;
    };

    const fetchData = async (requestConfig) => { 
        try {
            console.log("Fetching Data");
            setIsLoading(true);
            setIsSuccess(false);
            setHasError(false);
            const response = await fetch(requestConfig.endpoint, {
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });
            if (response.status < 200 && response.status > 299) {
                throw new Error(response.status);
            }
            const responseData = await response.json();
            console.log("Data Retrieved");
            return responseData;
        } catch(error) {
            console.log(error);
        }
    };

    return {
        getMarvelComicsResourceUrl,
        fetchData,
        isLoading,
        setIsLoading,
        isSuccess,
        setIsSuccess,
        hasError,
        setHasError
    };
};

export default useRequest;
