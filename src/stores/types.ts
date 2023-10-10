import { RouteType } from "@/shared/const/routes";
import { HomeState } from "./home";
import { MediaDetailsState } from "./mediaDetails";
import { RootState } from "./root";

export interface AppState {
  home: HomeState;
  mediaDetails: MediaDetailsState;
  root: RootState;
}


