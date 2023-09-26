import { Media } from "@/stores/types";
import getFullTMDBImgPath from "../helpers/getFullTMDBImgPath";
import { DiscoverMovie } from "./types";

export const mapDiscoverMovie = (data: DiscoverMovie): Media => ({
  ...data,
  backdrop_path: getFullTMDBImgPath(data.backdrop_path),
	poster_path: getFullTMDBImgPath(data.poster_path),
  type: "movie",
});
