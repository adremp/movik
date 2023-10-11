import { RouteType } from "@/shared/const/routes";
import { MediaVideo } from "./mediaVideos";


interface MediaBase {
  id: number;
	adult?: boolean
  poster_path?: string;
  backdrop_path?: string;
  title: string;
  overview: string;
  release_date: string;
}

type MediaExtraParams = {
  movie: {};
  show: { chapters: number };
};

type MediaType = keyof Pick<RouteType, "movie" | "show">;

export type Media = {
  [Key in keyof MediaExtraParams]: {
    type: MediaType;
    href: string;
  } & MediaBase &
    MediaExtraParams[Key];
}[keyof MediaExtraParams];

export type MediaResponse = { results: any[] };

export type Video = MediaVideo & {url: string}