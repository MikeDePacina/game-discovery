import useFetchData from "./useFetchData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useFetchData<Genre>("/genres");

export default useGenres;
