import useFetchData from "./useFetchData";

interface Genre {
  id: number;
  slug: string;
  name: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
