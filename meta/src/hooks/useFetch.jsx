import { useEffect, useState } from 'react';

const useFetch = (url, options) => {
  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function fetchData(url, options) {
    setStatus({ loading: true });
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setStatus({ loading: false, data: res.data });
      })
      .catch((error) => {
        setStatus({ loading: false, error });
      });
  }

  useEffect(() => {
    if (url) {
      fetchData(url, option);
    }
  }, []);

  return { ...status, fetchData };
};

export default useFetch;
