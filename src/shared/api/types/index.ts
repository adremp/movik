import { RouteType } from "@/shared/const/routes";
import { MovieVideo } from "./movieVideos";

type MediaType = keyof Pick<RouteType, "movie" | "show">;

export interface MediaBase {
  backdrop_path?: string;
  poster_path?: string;
  type: MediaType;
  href: string;
}

export interface Media extends MediaBase {
  id: number;
  adult?: boolean;
  title: string;
  overview: string;
  release_date: string;
}

// type MediaExtraParams = {
//   movie: {};
//   show: { chapters: number };
// };

// export type Media = {
//   [Key in keyof MediaExtraParams]: MediaBase &
//     MediaExtraParams[Key];
// }[keyof MediaExtraParams];

export type MediaResponse = { results: any[] };

type VideoBase = { url: string };
export type Video = MovieVideo & VideoBase;
