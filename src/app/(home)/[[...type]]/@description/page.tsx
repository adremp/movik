import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import AddListButton from "@/features/AddListButton";
import MediaLink from "@/features/MediaLink";
import { getMovieDetailsById, getShowDetailsById } from "@/shared/api";
import PlayIcon from "@/shared/assets/play.svg";
import button from "@/shared/styles/button";
import { getType, typeFetchFn } from "../@mediaList/layout";
import { NavRouteKeys, Params, SearchParams } from "../_types";
import { Media } from "@/shared/api/types";

const nullMediaIdFetchFn: Record<string, (id: string) => Promise<Media>> = {
  movies: getMovieDetailsById,
  shows: getShowDetailsById,
} satisfies Record<NavRouteKeys, (id: string) => Promise<Media>>;

const DescriptionPage = async (props: SearchParams & Params) => {
  const id = props.searchParams.mediaId;
  const type = getType(props);

  const movie = id
    ? await nullMediaIdFetchFn[type](id)
    : (await typeFetchFn[type]())[0]["data"][0];

  const bottomBlock = (
    <div className="flex gap-12 mt-40">
      <MediaLink
        extraUrl="?watch"
        mediaId={movie.id}
        type={movie.type}
        className={button({ variant: "primary" }, "mr-auto")}
      >
        <PlayIcon />
        Watch
      </MediaLink>
      <MediaLink
        extraUrl="?trailer"
        mediaId={movie.id}
        type={movie.type}
        className={button({ variant: "secondary" }, "ml-auto")}
      >
        <PlayIcon />
        Trailer
      </MediaLink>
      <AddListButton />
    </div>
  );

  const bgImage = movie.backdrop_path || movie.poster_path;

  return (
    <>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription
        className="mt-55 "
        title={movie.title}
        description={movie.overview}
        infoChild={<></>}
        bottomChild={bottomBlock}
      />
    </>
  );
};

export default DescriptionPage;
