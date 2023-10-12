import { RouteType } from "@/shared/const/routes";

type MediaType = keyof Pick<RouteType, "movie" | "show">;

export interface MediaBase {
  backdrop_path?: string;
  poster_path?: string;
  type: MediaType;
  href: string;
}
// export interface Media {
//   id: number;
//   adult?: boolean;
//   poster_path?: string;
//   backdrop_path?: string;
//   title: string;
//   overview: string;
//   release_date: string;
//   type: MediaType;
//   href: string;
// }

// type MediaExtraParams = {
//   movie: {};
//   show: { chapters: number };
// };

// export type Media = {
//   [Key in keyof MediaExtraParams]: MediaBase &
//     MediaExtraParams[Key];
// }[keyof MediaExtraParams];

export type MediaResponse = { results: any[] };

export type VideoBase = { url: string };
// export type Video = MovieVideo & VideoBase;
