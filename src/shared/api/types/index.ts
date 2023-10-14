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


export type MediaResponse<R = any[]> = {
  results: R;
  page: number;
  total_pages: number;
};

type VideoBase = { url: string };
export type Video = MovieVideo & VideoBase;
