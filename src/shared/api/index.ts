import { urls } from "../const";
import { DiscoverMovieResponse, MediaVideoResponse } from "./types";

interface FetchMediaQueryParams {
  movieDiscover: {
    "release_date.gte": string;
    sort_by: "popularity.asc" | "popularity.desc";
  };
	mediaVideos: {}
}

export interface FetchMediaResponseTypes {
  movieDiscover: DiscoverMovieResponse;
	mediaVideos: MediaVideoResponse
}

export type Endpoints = keyof FetchMediaQueryParams;

export const fetchMedia = <E extends Endpoints>(
  endpoint: string,
  query: FetchMediaQueryParams[E]
): Promise<FetchMediaResponseTypes[E]> => {
  const queryParams = new URLSearchParams(query);
  return fetch(`${urls.TMDB}${endpoint}?${queryParams}`, {
    headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}` },
  }).then((res) => res.json());
};
