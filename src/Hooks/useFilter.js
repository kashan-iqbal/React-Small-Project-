import useData from "./useGame";

const useGame = (slected, platform, sort, search) =>
  useData(
    "/games",
    {
      params: {
        genres: slected?.id,
        platforms: platform?.id,
        ordering: sort,
        search: search,
      },
    },
    [slected?.id, platform?.id, sort ,search]
  );

export default useGame;
