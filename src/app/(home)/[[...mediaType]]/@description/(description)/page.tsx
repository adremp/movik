import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import * as motion from "@/components/motion/components";
import MediaLink from "@/features/MediaLink";
import { getMovieDetailsById, getShowDetailsById } from "@/shared/api";
import { Media } from "@/shared/api/types";
import PlayIcon from "@/shared/assets/play.svg";
import button from "@/shared/styles/button";
import pill from "@/shared/styles/pill";
import text from "@/shared/styles/text";
import dayjs from "dayjs";
import { getType, typeFetchFn } from "../../@mediaList/(mediaList)/layout";
import { NavRouteKeys, Params, SearchParams } from "../../_types";

const nullMediaIdFetchFn: Record<string, (id: string) => Promise<Media>> = {
  index: getMovieDetailsById,
  movies: getMovieDetailsById,
  shows: getShowDetailsById,
} satisfies Record<NavRouteKeys, (id: string) => Promise<Media>>;

const DescriptionPage = async (props: SearchParams & Params) => {
  const id = props.searchParams.mediaId;
  const type = getType(props);

  const media = id
    ? await nullMediaIdFetchFn[type](id)
    : (await typeFetchFn[type]())[0]["data"][0];

  const bgImage = media.backdrop_path || media.poster_path;

  return (
    <motion.div
      initial={false}
      className="mx-page"
      variants={{
        full: {
          display: ["block", "none"],
          maxHeight: 0,
          overflow: "hidden",
        },
        default: {
          display: "block",
          maxHeight: "100%",
          overflow: "visible",
        },
        expanded: {
          display: "block",
          maxHeight: "100%",
          overflow: "visible",
        },
      }}
    >
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <motion.div
        transition={{ bounce: 0.1, gridTemplate: { duration: 0 } }}
        initial={false}
        variants={{
          expanded: {
            gridTemplate: `"t d" max-content "i d" 0fr "a d" 1fr / 1fr 1fr `,
            marginTop: [null, 20, 20],
            display: "grid",
          },
          default: {
            gridTemplate: [
              null,
              `"t" max-content "i" "d" "a" 1fr`,
              `"t" max-content "i" "d" "a" 1fr`,
            ],
            marginTop: [null, 55, 55],
            display: "grid",
          },
          full: {
            display: [null, "grid", "none"],
          },
        }}
        className={"z-[1] h-min max-lg:overflow-hidden grid text-text-primary"}
      >
        <motion.h1
          key={media.id + "1"}
          transition={{ fontSize: { duration: 0 } }}
          initial={false}
          variants={{
            expanded: { fontSize: "var(--text-min)", opacity: [0, 0, 1] },
            default: { fontSize: "var(--text-max)", opacity: [0, 0, 1] },
          }}
          className={text(
            { size: "100" },
            "overflow-hidden [--text-min:30px] md:[--text-min:50px] [--text-max:60px] md:[--text-max:100px] text-ellipsis break-words line-clamp-2 ga-[t]"
          )}
        >
          {media.title}
        </motion.h1>
        <motion.div
          initial={false}
          variants={{ expanded: { marginTop: 10 }, default: { marginTop: 35 } }}
          className={"flex items-center gap-14 ga-[i]"}
        >
          {media.adult && (
            <span className={pill({ variant: "primary" })}>C18</span>
          )}
          <span className={text({ size: "20-400" })}>
            {dayjs(media.release_date).format("YYYY")}
          </span>
        </motion.div>
        <motion.p
          key={media.id + "2"}
          transition={{
            marginLeft: { duration: 0 },
            marginTop: { duration: 0 },
          }}
          initial={false}
          variants={{
            expanded: { opacity: [0, 0, 1], marginLeft: 20, marginTop: 0 },
            default: { opacity: [0, 0, 1], marginTop: 19, marginLeft: 0 },
          }}
          className={text(
            { size: "20-400" },
            "ga-[d] max-w-[65ch] h-min line-clamp-5"
          )}
        >
          {media.overview}
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
            extraUrl="?trailer"
            mediaId={media.id}
            type={media.type}
            className={button({ variant: "primary" })}
          >
            <PlayIcon />
            Trailer
          </MediaLink>
          {/* <AddListButton /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DescriptionPage;
