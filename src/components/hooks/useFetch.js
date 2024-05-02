import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(page) {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    photos: [],
  });

  const getPhotos = useCallback(async () => {
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

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return { loading, state };
}

export default useFetch;
