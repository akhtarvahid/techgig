
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

function useFetch(page) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    photos: [],
    isLoading: false,
    page: 0,
    prevY: 0,
  });

  useEffect(() => {
    console.log('page: ', page)
    try {
        setLoading(true);
        axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
        )
        .then((res) =>
          setState((prev) => ({
            ...prev,
            photos: [...prev.photos, ...res.data],
            isLoading: false,
          }))
        );
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
  }, [page]);

  console.log('state:::', state, loading);
  return { loading, state };
}

export default useFetch;