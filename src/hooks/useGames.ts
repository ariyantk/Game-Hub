import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
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
      
        useEffect(() => {
            const controller = new AbortController()

          apiClients
            .get<FetchGameResponse>("/games", {signal: controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });


        return () => controller.abort()

        }, []);

        return {games, error};
}

export default useGames;