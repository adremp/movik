import MediaVideos from "@/components/MediaVideos";
import { getMovieVieosById } from "@/shared/api";
import { Params, SearchParams } from "../../_types";

const Videos = async (props: Params & SearchParams) => {
  const videos = await getMovieVieosById(props.params.id);

  return <MediaVideos videos={videos} />;
};

export default Videos;
