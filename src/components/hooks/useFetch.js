
import { useState, useEffect, useCallback } from 'react';
import axios from "axios";

function useFetch(page) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    photos: [],
  });

  useEffect(() => {
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