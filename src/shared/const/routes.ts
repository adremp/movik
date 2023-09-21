export default {
  home: () => "/",
  show: (id: string = ":id") => `/show/${id}`,
  film: (id: string = ":id") => `/film/${id}`,
  search: () => "/search",
	favorite: () => "/favorite"
};
