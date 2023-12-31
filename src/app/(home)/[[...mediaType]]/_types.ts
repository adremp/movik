import { RouteType } from "@/shared/const/routes";

export type Params = { params: { mediaType?: string[] } };
export type SearchParams = {
  searchParams: {
    showId?: string;
    movieId?: string;
  };
};

export type NavRouteKeys = keyof Pick<RouteType, "shows" | "movies" | "index">;
