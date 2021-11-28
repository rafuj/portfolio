import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";
import "../firebase";
export default function useClientsSay() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [clientsSay, setClientsSay] = useState([]);
  useEffect(() => {
    async function fetchClientsSay() {
      const db = getDatabase();
      const clientsSayRef = ref(db, "testimonial");
      const clientsSayQuery = query(clientsSayRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(clientsSayQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setClientsSay((prevClientsSay) => {
            return [...prevClientsSay, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchClientsSay();
  }, []);

  return {
    loading,
    error,
    clientsSay,
  };
}
