import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";
import { Game, FetchGameResponse } from "./useGames";

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        apiClients
            .get<FetchGameResponse>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            }
            );


        return () => controller.abort();

    }, []);

    return { games, error };
};
