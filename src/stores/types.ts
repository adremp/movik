import { HomeState } from "./home";
import { MediaDetailsState } from "./mediaDetails";

export interface AppState {
  home: HomeState;
  mediaDetails: MediaDetailsState;
}

interface MediaBase {
  id: number;
  poster_path?: string;
  backdrop_path?: string;
  title: string;
  overview: string;
  release_date: string;
}

export type MediaExtraParams = {
  movie: {};
  show: { chapters: number };
};

export type Media = {
  [Key in keyof MediaExtraParams]: { type: Key } & MediaBase &
    MediaExtraParams[Key];
}[keyof MediaExtraParams];
