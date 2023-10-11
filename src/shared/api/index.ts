import { urls } from "../const";
import {
  MediaParam,
  MoviesParamTypes,
  ShowsParamTypes,
  moviesParams,
  showsParams,
} from "./const";
import {
  mapDiscoverShow,
  mapMovieDetails,
  movieTypeMaps,
  showTypeMaps,
} from "./maps";
import { Media, MediaResponse, Video } from "./types";
import { MediaVideoResponse } from "./types/mediaVideos";
import { MovieDetails } from "./types/movieDetails";
import { ShowDetails } from "./types/showDetails";

export const fetchMedia = <R extends Record<string, any>>(
  endpoint: string,
  query: Record<string, string>
): Promise<R> => {
  const queryParams = new URLSearchParams(query);
  return fetch(`${urls.TMDB}${endpoint}?${queryParams}`, {
    headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` },
    next: { revalidate: 600 },
  }).then((res) => res.json());
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
        data.results.map(movieTypeMaps[p.type])
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

export const getMovieDetailsById = (id: number | string): Promise<Media> =>
  fetchMedia<MovieDetails>(`/movie/${id}`, {}).then(mapMovieDetails);

export const getMovieVieosById = (id: string): Promise<Video[]> =>
  fetchMedia<MediaVideoResponse>(`/movie/${id}/videos`, {}).then((data) =>
    data.results.map((el) => ({ ...el, url: urls.youtubeVideo(el.key) }))
  );

export const getShowDetailsById = (id: number | string): Promise<Media> =>
  fetchMedia<ShowDetails>(`/tv/${id}`, {}).then(mapDiscoverShow);

// export const getDiscoverShow = async (id?: number | string): Promise<Media> => {
//   if (!id) return (await getDiscoverShows())[0];
//   return await getMovieDetailsById(+id);
// };

// export const getDiscoverShows = (): Promise<Media[]> =>
//   fetchMedia<ShowDiscoverResponse>("/discover/tv", {}).then((data) =>
//     data.results.map(mapDiscoverShow)
//   );
