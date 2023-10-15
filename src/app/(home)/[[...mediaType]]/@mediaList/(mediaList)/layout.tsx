import HoverLink from "@/components/HoverLink";
import MediaCard from "@/components/MediaCard";
import MediaList from "@/components/MediaList";
import MoreVideosButton from "@/components/MoreVideosButton";
import { MediaDataList, getMovies, getShows } from "@/shared/api";
import { getMediaParam } from "@/shared/api/const";
import { NavRouteKeys, Params } from "../../_types";
import InfiniteListWrapper from "./InfiniteListWrapper";
import ScrollWrapper from "./ScrollWrapper";

export const typeFetchFn: Record<string, () => Promise<MediaDataList[]>> = {
  index: getMovies,
  movies: getMovies,
  shows: getShows,
} satisfies Record<NavRouteKeys, () => Promise<MediaDataList[]>>;

export const getType = (props: Params) =>
  props.params.mediaType?.[0] ?? "movies";

const MediaListLayout = async (props: Params) => {
  const pageType = getType(props);
  const mediaLists = await typeFetchFn[pageType]();
	
  return (
    <ScrollWrapper>
      <InfiniteListWrapper>
        {mediaLists.map((el) => {
          const param = getMediaParam(el.type)!;
          return (
            <MediaList
              extraTitleChild={
                "page" in param.query && (
                  <MoreVideosButton paramType={el.type} />
                )
              }
              className="mt-35"
              key={el.title}
              title={el.title}
            >
              {el.data.map((el) => (
                <HoverLink
                  delayMs={300}
                  key={el.id}
                  hoverHref={`?mediaId=${el.id}`}
                  href={el.href}
                >
                  <MediaCard
                    image={el.poster_path || el.backdrop_path || ""}
                    title={el.title}
                  />
                </HoverLink>
              ))}
            </MediaList>
          );
        })}
      </InfiniteListWrapper>
    </ScrollWrapper>
  );
};

export default MediaListLayout;
