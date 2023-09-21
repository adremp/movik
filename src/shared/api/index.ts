import { baseUrl } from "../const";
import { TopRatedResponse } from "./types";

export const getTopRated = async (): Promise<TopRatedResponse> => {
  const res = await fetch(`${baseUrl.TMDB}/movie/top_rated`, {
    headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
  });
  return res.json();
};
