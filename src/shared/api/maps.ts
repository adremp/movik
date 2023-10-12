import { urls } from "../const";
import routes from "../const/routes";
import getFullTMDBImgPath from "../utils/getFullTMDBImgPath";
import { MoviesParamTypes, ShowsParamTypes } from "./const";
import { MediaBase, VideoBase } from "./types";
import { AiringTodayShow } from "./types/airingTodayShows";
import { MovieDetails } from "./types/movieDetails";
import { MovieDiscover } from "./types/movieDiscover";
import { MovieVideo } from "./types/movieVideos";
import { PopularLastWeekShow } from "./types/popularLastWeekShows";
import { ShowDetails } from "./types/showDetails";
import { ShowDiscover } from "./types/showDiscover";

export const mapMovie = <T extends MovieDiscover | MovieDetails>(
  data: T
): T & MediaBase => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
  poster_path: getFullTMDBImgPath(data.poster_path),
  type: "movie",
  href: routes.movie(data.id),
});

export const mapVideo = <T extends MovieVideo>(data: T): T & VideoBase => ({
  ...data,
  url: urls.youtubeVideo(data.key),
});
// export const mapDiscoverMovie = <T extends MovieDiscover | MovieDetails>(
//   data: T
// ): Media => ({
//   ...data,
//   backdrop_path: getFullTMDBImgPath(data.backdrop_path),
//   poster_path: getFullTMDBImgPath(data.poster_path),
//   type: "movie",
//   href: routes.movie(data.id),
// });

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
  popularLastMonth: mapMovie,
  popularLastYear: mapMovie,
};

export const showTypeMaps: Record<ShowsParamTypes, (data: any) => Media> = {
  airToday: mapDiscoverShow,
  popularLastWeek: mapDiscoverShow,
};
