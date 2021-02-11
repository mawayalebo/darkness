import { useState, useEffect } from 'react'

const useFetch = (url)=>{
    const [ currentData, setCurrentData] = useState(null);
    const [ loading, setLoading] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(results => {
            if(!results.ok){
                throw new Error("couldn't fetch data succesfully, please try refreshing");
            }
            return results.json();
        })
        .then((data)=>{
            setCurrentData(data);
            setError(null);
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
            setCurrentData(null);
        })
    },[url])
    return { currentData, loading, error}
}

export default useFetch;