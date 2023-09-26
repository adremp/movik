export default {
  home: () => "/",
  show: (id: number | string = ":id") => `/show/${id}`,
  movie: (id: number | string = ":id") => `/movie/${id}`,
  search: () => "/search",
  favorite: () => "/favorite",
};
