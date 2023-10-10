import { RouteType } from "@/shared/const/routes";

export type Params = { params: { type?: string[] } };
export type SearchParams = {
  searchParams: {
    mediaId?: string;
  };
};

export type NavRouteKeys = keyof Pick<RouteType, "shows" | "movies">;
