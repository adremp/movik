
export const TMDB = "https://api.themoviedb.org/3/";
export const discoverMovie = "/discover/movie";
export const mediaVideos = (id: string) => `movie/${id}/videos`;
export const youtubeVideo = (key: string) => `https://www.youtube.com/embed/${key}`