import useFetchData from "./useFetchData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = () => useFetchData<Game>("/games");

export default useGames;
