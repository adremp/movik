import { notFound } from "next/navigation";
import { urls } from "../const";
import {
  MediaParam,
  MoviesParamTypes,
  ShowsParamTypes,
  moviesParams,
  showsParams,
} from "./const";
import {
  mapMovieDetails,
  mapShowDetails,
  mapVideo,
  movieTypeMaps,
  showTypeMaps,
} from "./maps";
import { Media, MediaResponse, Video } from "./types";
import { MovieCast, MovieCredentialsResponse } from "./types/movieCredentials";
import { MovieDetails } from "./types/movieDetails";
import { MovieVideosResponse } from "./types/movieVideos";
import { ShowCast, ShowCredentialsResponse } from "./types/showCredentials";
import { ShowDetails } from "./types/showDetails";
import { ShowVideosResponse } from "./types/showVideos";

export const fetchMedia = <R extends Record<string, any>>(
  endpoint: string,
  query: Record<string, string>
): Promise<R> => {
  const queryParams = new URLSearchParams(query);
  return fetch(`${urls.TMDB}${endpoint}?${queryParams}`, {
    headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
    next: { revalidate: 600 },
  }).then(async (res) => {
    const ret = await res.json();
    if (ret.success === false) notFound();
    return ret;
  });
};

export type MediaDataList = Pick<
  MediaParam<MoviesParamTypes | ShowsParamTypes>,
  "title" | "type"
> & {
  data: Media[];
};

export const getMovies = async (): Promise<MediaDataList[]> => {
  const movies = await Promise.all(
    moviesParams.map((p) =>
      fetchMedia<MediaResponse>(p.url, p.query).then((data) =>
        data?.results.map(movieTypeMaps[p.type])
      )
    )
  );

  return movies.map((el, i) => ({
    data: el,
    title: moviesParams[i].title,
    type: moviesParams[i].type,
  }));
};

export const getShows = async (): Promise<MediaDataList[]> => {
  const shows = await Promise.all(
    showsParams.map((p) =>
      fetchMedia<MediaResponse>(p.url, p.query).then((data) =>
        data.results.map(showTypeMaps[p.type])
      )
    )
  );
  return shows.map((el, i) => ({
    data: el,
    title: showsParams[i].title,
    type: showsParams[i].type,
  }));
};

export const getMovieDetailsById = (id: number | string) =>
  fetchMedia<MovieDetails>(`/movie/${id}`, {}).then((data) =>
    mapMovieDetails(data)
  );

export const getMovieVieosById = (id: string): Promise<Video[]> =>
  fetchMedia<MovieVideosResponse>(`/movie/${id}/videos`, {}).then((data) =>
    data.results.map(mapVideo)
  );

export const getShowDetailsById = (id: number | string) =>
  fetchMedia<ShowDetails>(`/tv/${id}`, {}).then(mapShowDetails);

export const getShowVideosById = (id: number | string): Promise<Video[]> =>
  fetchMedia<ShowVideosResponse>(`/tv/${id}/videos`, {}).then((data) =>
    data.results.map(mapVideo)
  );

export const getShowSeasonVideos = (showId: string, season: string) =>
  fetchMedia<ShowVideosResponse>(
    `/tv/${showId}/season/${season}/videos`,
    {}
  ).then((data) => data.results.map(mapVideo));

export const getMovieCredits = (id: number | string): Promise<MovieCast[]> =>
  fetchMedia<MovieCredentialsResponse>(`/movie/${id}/credits`, {}).then(
    (data) => data.cast
  );

export const getShowCredits = (id: number | string): Promise<ShowCast[]> =>
  fetchMedia<ShowCredentialsResponse>(`/tv/${id}/credits`, {}).then(
    (data) => data.cast
  );
