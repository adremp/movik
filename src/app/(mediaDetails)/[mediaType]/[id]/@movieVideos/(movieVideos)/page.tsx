import MediaVideos from "@/components/MediaVideos";
import { getMovieVieosById } from "@/shared/api";
import { Params, SearchParams } from "../../_types";

const Videos = async (props: Params & SearchParams) => {
  const videos = await getMovieVieosById(props.params.id);

  return (
    <MediaVideos
      className="lg:row-span-2 max-lg:child:h-max max-lg:child:w-full overflow-hidden max-lg:mt-60"
      videos={videos}
    />
  );
};

export default Videos;
