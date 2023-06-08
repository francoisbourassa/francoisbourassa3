import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch_1 = (jobDetails, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`'https://jsearch.p.rapidapi.com/job-details',/${jobDetails}${query}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [jobDetails, query]);

  return { data, isLoading, error };
};

export default useFetch_1;
