import MediaVideos from "@/components/MediaVideos";
import { getShowSeasonVideos, getShowVideosById } from "@/shared/api";
import { Params, SearchParams } from "../../_types";

const Videos = async ({ params, searchParams }: Params & SearchParams) => {

  const season = searchParams.season ?? "1";
  let videos = await getShowSeasonVideos(params.id, season);
  if (videos.length === 0) {
    videos = await getShowVideosById(params.id);
  }

  return (
    <MediaVideos
      className="lg:row-span-2 max-lg:child:h-max max-lg:child:w-full overflow-hidden max-lg:mt-60"
      videos={videos}
    />
  );
};

export default Videos;
