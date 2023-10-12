import MediaVideos from "@/components/MediaVideos";
import { getMovieVieosById } from "@/shared/api";
import { Params } from "../../_types";

const Videos = async (props: Params) => {
  const videos = await getMovieVieosById(props.params.id);
  const videoUrls = videos.map((v) => v.url);

  return <MediaVideos urls={videoUrls} />;
};

export default Videos;
