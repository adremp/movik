import MediaList from "@/components/MediaList";
import { NavRouteKeys, Params } from "../_types";
import { MediaDataList, getMovies, getShows } from "@/shared/api";

export const typeFetchFn: Record<string, () => Promise<MediaDataList[]>> = {
  movies: getMovies,
  shows: getShows,
} satisfies Record<NavRouteKeys, () => Promise<MediaDataList[]>>;

export const getType = (props: Params) => props.params.type?.[0] ?? "movies";

const MediaListLayout = async (props: Params) => {
  const pageType = getType(props);
  const mediaList = await typeFetchFn[pageType]();

  return (
    <div className="flex flex-col gap-15 mt-85">
      {mediaList.map((el) => (
        <MediaList key={el.title} items={el.data} title={el.title} />
      ))}
    </div>
  );
};

export default MediaListLayout;
