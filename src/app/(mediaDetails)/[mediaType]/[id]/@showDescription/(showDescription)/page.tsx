
import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import * as motion from "@/components/motion/components";
import { getShowDetailsById, getShowSeasonVideos } from "@/shared/api";
import { Season } from "@/shared/api/types/showDetails";
import pill from "@/shared/styles/pill";
import text from "@/shared/styles/text";
import dayjs from "dayjs";
import Link from "next/link";
import { ReactElement } from "react";
import { Params, SearchParams } from "../../_types";

const Description = async ({ params, searchParams }: Params & SearchParams) => {
  const season = searchParams.season ?? "1";

  const [show, seasonVideos] = await Promise.all([
    getShowDetailsById(params.id),
    getShowSeasonVideos(params.id, season),
  ]);

  const seasonsClickable = seasonVideos.length > 0;
  const renderSeason: (el: Season) => ReactElement = seasonsClickable
    ? (el) => (
        <Link
          key={el.id}
          replace
          href={`?season=${el.season_number}`}
          className={text(
            { size: "50-400" },
            "whitespace-nowrap",
            el.season_number !== +season && "opacity-20"
          )}
        >
          {el.name}
        </Link>
      )
    : (el) => (
        <span
          key={el.id}
          className={text({ size: "50-400" }, "whitespace-nowrap")}
        >
          {el.name}
        </span>
      );

  const bgImage = show.backdrop_path || show.poster_path;

  return (
    <motion.div
      className="flex overflow-hidden w-full flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription
        className="max-w-[65ch]"
        title={show.title}
        description={show.overview}
        infoChild={
          <>
            {show.adult && (
              <span className={pill({ variant: "primary" })}>C18</span>
            )}
            <span className={text({ size: "20-500" }, "opacity-50")}>
              {dayjs(show.first_air_date).format("DD MMMM YYYY")}
            </span>
            <span className={pill({ variant: "primary" }, "uppercase")}>
              {show.original_language}
            </span>
          </>
        }
      />
      <div className="mt-auto overflow-hidden w-full shrink-0">
        <div className="flex overflow-x-auto scrollbar-hover gap-25">
          {show.seasons.map(renderSeason)}
        </div>
        <p className={text({ size: "22-400" }, "opacity-20")}>
          {show.genres.map((el) => el.name).join(" / ")}
        </p>
      </div>
    </motion.div>
  );
};

export default Description;
