export const TMDB = "https://api.themoviedb.org/3/";
export const discoverMovie = "/discover/movie";

export type Endpoints = "videos" | "credentials";
export const movie = (id: number, ...paths: Endpoints[]) =>
  `movie/${id}${paths.length ? "?append_to_response=${paths.join(',')}" : ""}`;
export const youtubeVideo = (key: string) =>
  `https://www.youtube.com/embed/${key}?controls=2&rel=0&autoplay=1`;

export const trending = (type: "tv" | "movie", timeWindow: "day" | "week") =>
  `trending/${type}/${timeWindow}`;

export const youtubePreview = (key: string) =>
  `https://img.youtube.com/vi/${key}/hqdefault.jpg`;
