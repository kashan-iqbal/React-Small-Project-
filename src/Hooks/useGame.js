import { useEffect, useState } from "react";
import axiox from "../api-client/ApiClient";
import { CanceledError } from "axios";

const useData = (endPoint, params = {}, dep = []) => {
  const [game, setGames] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      const getGames = async () => {
        try {
          const { data } = await axiox.get(endPoint, params, {
            signal: controller.signal,
          });
          setGames(data.results);
          setLoading(false);
        } catch (error) {
          if (error instanceof CanceledError) return;

          setError(error.message);
          setLoading(false);
        }
      };
      getGames();
      return () => controller.abort();
    },
    dep ? [...dep] : []
  );
  return { error, game, loading };
};

export default useData;
