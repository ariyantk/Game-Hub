import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Platform{
  id: number;
  name: string;
  slug: string;
  metacriti: number;
}

export interface Game {
    metacritic: number;
    image_background: string | undefined;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState();
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
            const controller = new AbortController()

            setLoading(true);
          apiClients
            .get<FetchGameResponse>("/games", {signal: controller.signal})
            .then((res) => {
              setGames(res.data.results)
              setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            });


        return () => controller.abort()

        }, []);

        return {games, error, isLoading};
}

export default useGames;