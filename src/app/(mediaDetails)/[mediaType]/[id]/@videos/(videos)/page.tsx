import MediaVideos from "@/components/MediaVideos";
import { getMovieVieosById, getShowVideosById } from "@/shared/api";
import { Params } from "../../_types";

const mapVideos = {
  movie: getMovieVieosById,
  show: getShowVideosById,
};

const Videos = async (props: Params) => {
  const videos = await mapVideos[props.params.mediaType](props.params.id);
  // const videos = await getMovieVieosById(props.params.id);
  const videoUrls = videos.map((v) => v.url);

  return <MediaVideos urls={videoUrls} />;
};

export default Videos;
