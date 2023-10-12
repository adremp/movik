import MediaVideos from "@/components/MediaVideos";
import { getShowSeasonVideos, getShowVideosById } from "@/shared/api";
import { Params, SearchParams } from "../../_types";

const Videos = async ({ params, searchParams }: Params & SearchParams) => {

  const season = searchParams.season ?? "1";
  let videos = await getShowSeasonVideos(params.id, season);
  if (videos.length === 0) {
    videos = await getShowVideosById(params.id);
  }

  return <MediaVideos videos={videos} />;
};

export default Videos;
