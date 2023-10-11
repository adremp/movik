const routes = {
  index: () => "/",
  movies: () => "/movies",
  shows: () => "/shows",
  show: (id: number | string = ":id") => `/show/${id}`,
  movie: (id: number | string = ":id") => `/movie/${id}`,
  search: () => "/search",
  favorites: () => "/favorites",
};

export type RouteType = typeof routes;

export default routes;
