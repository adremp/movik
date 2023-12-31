import dayjs from "dayjs";
import { urls } from "../const";

export const getMediaParam = (type: string) => {
  for (const param of mediaParams) {
    if (param.type === type) return param;
  }
};

export type MediaParam<Type extends string> = {
  type: Type;
  title: string;
  url: string;
  query: Record<string, string>;
};

export type MoviesParamTypes = "popularLastMonth" | "popularLastYear";

export const moviesParams: MediaParam<MoviesParamTypes>[] = [
  {
    type: "popularLastMonth",
    title: "Popular last month",
    url: urls.discoverMovie,
    query: {
      sort_by: "popularity.desc",
      "release_date.gte": dayjs().subtract(1, "month").format("YYYY-MM-DD"),
      page: "1",
      include_adult: "true",
    },
  },
  {
    type: "popularLastYear",
    title: "Popular last year",
    url: urls.discoverMovie,
    query: {
      sort_by: "popularity.desc",
      "release_date.gte": dayjs().subtract(1, "year").format("YYYY-MM-DD"),
      page: "1",
      include_adult: "true",
    },
  },
];

export type ShowsParamTypes = "popularLastWeek" | "airToday";

export const showsParams: MediaParam<ShowsParamTypes>[] = [
  {
    type: "airToday",
    title: "Arrive next week",
    url: `/tv/airing_today`,
    query: {},
  },
  {
    type: "popularLastWeek",
    title: "Popular last week",
    url: urls.trending("tv", "week"),
    query: {},
  },
];

export type ParamTypes = ShowsParamTypes | MoviesParamTypes;

export const mediaParams = [...moviesParams, ...showsParams];
