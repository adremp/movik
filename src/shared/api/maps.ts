import { MediaTypeParams } from "@/app/(mediaDetails)/[mediaType]/layout";
import { urls } from "../const";
import routes from "../const/routes";
import getFullTMDBImgPath from "../utils/getFullTMDBImgPath";
import { MoviesParamTypes, ParamTypes, ShowsParamTypes } from "./const";
import { Media } from "./types";
import { AiringTodayShow } from "./types/airingTodayShows";
import { MovieDetails } from "./types/movieDetails";
import { MovieDiscover } from "./types/movieDiscover";
import { MovieVideo } from "./types/movieVideos";
import { PopularLastWeekShow } from "./types/popularLastWeekShows";
import { ShowDetails } from "./types/showDetails";
import { ShowDiscover } from "./types/showDiscover";
import { ShowVideo } from "./types/showVideos";

export const mapDiscoverMovie = <T extends MovieDiscover | MovieDetails>(
  data: T
): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path, "w342"),
  type: "movie",
  href: routes.movie(data.id),
});

export const mapMovieDetails = <T extends MovieDetails>(data: T): T & Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path, "w342"),
  type: "movie",
  href: routes.movie(data.id),
});

export const mapDiscoverShow = <
  T extends ShowDiscover | ShowDetails | AiringTodayShow | PopularLastWeekShow
>(
  data: T
): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path, "w342"),
  type: "show",
  href: routes.show(data.id),
  title: data.name,
  release_date: data.first_air_date,
});

export const mapShowDetails = <T extends ShowDetails>(data: T): T & Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path, "w342"),
  type: "show",
  href: routes.show(data.id),
  title: data.name,
  release_date: data.first_air_date,
});

export const mapVideo = (data: MovieVideo | ShowVideo) => ({
  ...data,
  url: urls.youtubeVideo(data.key),
});

export const movieTypeMaps: Record<MoviesParamTypes, (data: any) => Media> = {
  popularLastMonth: mapDiscoverMovie,
  popularLastYear: mapDiscoverMovie,
};

export const showTypeMaps: Record<ShowsParamTypes, (data: any) => Media> = {
  airToday: mapDiscoverShow,
  popularLastWeek: mapDiscoverShow,
};

export const mediaTypeMaps = {...movieTypeMaps, ...showTypeMaps}