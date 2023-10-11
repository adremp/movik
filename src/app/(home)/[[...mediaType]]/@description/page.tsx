import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import * as motion from "@/components/motion/components";
import AddListButton from "@/features/AddListButton";
import MediaLink from "@/features/MediaLink";
import { getMovieDetailsById, getShowDetailsById } from "@/shared/api";
import { Media } from "@/shared/api/types";
import PlayIcon from "@/shared/assets/play.svg";
import button from "@/shared/styles/button";
import pill from "@/shared/styles/pill";
import text from "@/shared/styles/text";
import { getType, typeFetchFn } from "../@mediaList/layout";
import { NavRouteKeys, Params, SearchParams } from "../_types";

const nullMediaIdFetchFn: Record<string, (id: string) => Promise<Media>> = {
  index: getMovieDetailsById,
  movies: getMovieDetailsById,
  shows: getShowDetailsById,
} satisfies Record<NavRouteKeys, (id: string) => Promise<Media>>;

const DescriptionPage = async (props: SearchParams & Params) => {
  const id = props.searchParams.mediaId;
  const type = getType(props);

  const movie = id
    ? await nullMediaIdFetchFn[type](id)
    : (await typeFetchFn[type]())[0]["data"][0];

  const bgImage = movie.backdrop_path || movie.poster_path;

  return (
    <motion.div>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <motion.div
        transition={{ bounce: 0.1, gridTemplate: { duration: 0 } }}
        initial={false}
        variants={{
          expanded: {
            gridTemplate: `"t d" max-content "i d" 0fr "a d" 1fr / 1fr 1fr `,
            marginTop: 20,
            height: [null, "20vh", "20vh"],
          },
          default: {
            gridTemplate: [
              null,
              `"t ." "i ." "d ." "a ." 1fr / 2fr 1fr`,
              `"t ." "i ." "d ." "a ." 1fr / 2fr 1fr`,
            ],
            height: [null, "60vh", "60vh"],
            marginTop: 55,
          },
        }}
        className={"z-[1] h-min overflow-hidden grid text-text-primary"}
      >
        <motion.h1
          key={movie.id + "1"}
          transition={{ fontSize: { duration: 0 } }}
          initial={false}
          variants={{
            expanded: { fontSize: "40px", opacity: [0, 0, 1] },
            default: { fontSize: "100px", opacity: [0, 0, 1] },
          }}
          exit={{ opacity: 0 }}
          className={text(
            { size: "100" },
            "overflow-hidden text-ellipsis break-words line-clamp-2 text-[inherit] ga-[t]"
          )}
        >
          {movie.title}
        </motion.h1>
        <div
          className={text({ size: "20-400" }, "mt-35 ga-[i] tracking-[-0.1px]")}
        >
          {movie.adult && (
            <span className={pill({ variant: "primary" })}></span>
          )}
        </div>
        <motion.p
          key={movie.id + "2"}
          transition={{
            marginLeft: { duration: 0 },
            marginTop: { duration: 0 },
          }}
          initial={false}
          variants={{
            expanded: { opacity: [0, 0, 1], marginLeft: 20, marginTop: 0 },
            default: { opacity: [0, 0, 1], marginTop: 19, marginLeft: 0 },
          }}
          className={text({ size: "20-400" }, "ga-[d] h-min line-clamp-5")}
        >
          {movie.overview}
        </motion.p>
        <motion.div
          transition={{ marginTop: { duration: 0 } }}
          layout
          initial={false}
          variants={{
            expanded: { marginTop: 10 },
            default: { marginTop: 40 },
          }}
          className="flex basis-full gap-12 ga-[a]"
        >
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DescriptionPage;
