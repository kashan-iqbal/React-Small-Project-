import React, { useEffect, useState } from "react";
import axiox from "../api-client/ApiClient";
import { CanceledError } from "axios";

const useGame = () => {
  const [game, setGames] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        const { data } = await axiox.get("/games", {
          signal: controller.signal,
        });
        setGames(data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;

        setError(error.message);
      }
    };
    getGames();
    return () => controller.abort();
  }, []);

  return { error, game };
};

export default useGame;
