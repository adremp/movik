import MediaCard from "@/components/MediaCard";
import MediaList from "@/components/MediaList";
import { MediaDataList, getMovies, getShows } from "@/shared/api";
import { NavRouteKeys, Params } from "../_types";
import ScrollWrapper from "./ScrollWrapper";

export const typeFetchFn: Record<string, () => Promise<MediaDataList[]>> = {
  movies: getMovies,
  shows: getShows,
} satisfies Record<NavRouteKeys, () => Promise<MediaDataList[]>>;

export const getType = (props: Params) =>
  props.params.mediaType?.[0] ?? "movies";

const MediaListLayout = async (props: Params) => {
  const pageType = getType(props);
  const mediaList = (await typeFetchFn[pageType]()).reduce<MediaDataList[]>(
    (acc, el: MediaDataList) => {
      acc.push(el, el, el);
      return acc;
    },
    []
  );

  return (
    <ScrollWrapper>
      {mediaList.map((el) => (
        <MediaList className="mt-35" key={el.title} title={el.title}>
          {el.data.map((el) => (
            <MediaCard
              hoverHref={`?mediaId=${el.id}`}
              href={el.href}
              image={el.poster_path || el.backdrop_path || ""}
              title={el.title}
              key={el.id}
            />
            // <HoverLink
            // 	hoverHref={`?mediaId=${el.id}`}
            //   key={el.id}
            //   href={el.href}
            //   className={effect(
            //     { bg: "darkOverlay" },
            //     "rounded-19 flex overflow-hidden items-center justify-center w-full group aspect-[2/3] relative",
            //     "[&:not(:hover)]:after:opacity-0 after:transition-opacity"
            //   )}
            // >
            //   <Image
            //     className="object-contain"
            //     fill
            //     loading="lazy"
            //     src={el.poster_path || el.backdrop_path || ""}
            //     alt=""
            //   />
            //   <PlayBgIcon className="transition-opacity z-10 opacity-0 group-hover:opacity-100" />
            //   <h2
            //     className={text(
            //       { size: "20-600" },
            //       "opacity-0 absolute bottom-16 z-10 left-16 transition-opacity"
            //     )}
            //   >
            //     {el.title}
            //   </h2>
            // </HoverLink>
          ))}
        </MediaList>
      ))}
    </ScrollWrapper>
  );
};

export default MediaListLayout;
