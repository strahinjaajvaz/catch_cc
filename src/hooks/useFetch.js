import { useEffect, useState } from "react";

export function useFetch(fetchPromise) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data: response } = await fetchPromise();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchPromise]);

  return { error, loading, data };
}
