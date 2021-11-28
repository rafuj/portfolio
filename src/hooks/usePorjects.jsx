import { get, getDatabase, orderByKey, query, ref } from "@firebase/database";
import { useEffect, useState } from "react";

export default function usePorjects() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      const db = getDatabase();
      const projectsRef = ref(db, "project");
      const projectsQuery = query(projectsRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(projectsQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setProjects((prevProjects) => {
            return [...prevProjects, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return {
    loading,
    error,
    projects,
  };
}
