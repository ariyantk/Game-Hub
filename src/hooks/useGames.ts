import useData from "./useData";

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
  

const useGames = () => useData<Game>('/games')

export default useGames;