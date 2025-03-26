

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetch () {
    const [axiosData, setAxiosData] = useState(null);
    const [fetchData, setFetchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
      

    useEffect (() =>{
        let fetchDataFromApis = async () => {
            setLoading(true);
            setError(null);


            try{
                // fetch data using axios
                let axiosResponse = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts/1"
                );
                setAxiosData(axiosResponse.data)

                const fetchResponse = await fetch (
                    'https://jsonplaceholder.typicode.com/comments/1'
                );
                let fetchDataJson = await fetchResponse.json();
                setFetchData(fetchDataJson);
            
            }
            catch (err){
                setError(err);
            }
            finally {
                setLoading(false)
            }
        };
        fetchDataFromApis();
    }, [] );
    if (loading) {
        return <div>Loading............</div>

    };
    if (error) {
        return <div>Error: {error.message}</div>
    };


    return(
    <div>
        <h1>
            Fetched data
        </h1>
        {axiosData &&(
            <div>
                <h3>Data fetched with Axios: </h3>
                <pre>{JSON.stringify (axiosData, null, 2)}</pre>
            </div>
        )}

        {fetchData && (
            <div>
                <h3>Data fetched with fetch : </h3>
                <pre>{JSON.stringify(fetchData, null, 2)}</pre>
            </div>
        )}
    </div>
    )
}

export default DataFetch;