import routes from "../const/routes";
import getFullTMDBImgPath from "../utils/getFullTMDBImgPath";
import { MoviesParamTypes, ShowsParamTypes } from "./const";
import { Media } from "./types";
import { AiringTodayShow } from "./types/airingTodayShows";
import { MovieDetails } from "./types/movieDetails";
import { MovieDiscover } from "./types/movieDiscover";
import { PopularLastWeekShow } from "./types/popularLastWeekShows";
import { ShowDetails } from "./types/showDetails";
import { ShowDiscover } from "./types/showDiscover";

export const mapDiscoverMovie = (data: MovieDiscover): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path),
  type: "movie",
  href: routes.movie(data.id),
});

export const mapMovieDetails = (data: MovieDetails): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path),
  type: "movie",
  href: routes.movie(data.id),
});

export const mapDiscoverShow = (
  data: ShowDiscover | ShowDetails | AiringTodayShow | PopularLastWeekShow
): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path),
  type: "show",
  href: routes.show(data.id),
  title: data.name,
  release_date: data.first_air_date,
});

export const movieTypeMaps: Record<MoviesParamTypes, (data: any) => Media> = {
  popularLastMonth: mapDiscoverMovie,
  popularLastYear: mapDiscoverMovie,
};

export const showTypeMaps: Record<ShowsParamTypes, (data: any) => Media> = {
  airToday: mapDiscoverShow,
  popularLastWeek: mapDiscoverShow,
};
