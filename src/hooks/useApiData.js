/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';

import mockData from '../services/mock_data.json'; 

const useApiData = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {        
        const response = await axios.get(apiUrl);
        setData(response.data.items);
        
        setTimeout(() => { 
          setData(mockData.items);
          setIsLoading(false);
        }, 500);

      } catch (err) {
        setError('Error contacting TESS. Please try again.');
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [apiUrl]); 

  return { data, isLoading, error };
};

export default useApiData;