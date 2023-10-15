import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import * as motion from "@/components/motion/components";
import { getMovieDetailsById } from "@/shared/api";
import RateIcon from "@/shared/assets/star.svg";
import pill from "@/shared/styles/pill";
import text from "@/shared/styles/text";
import dayjs from "dayjs";
import { Params } from "../../_types";
import Cast from "./Cast";

const Description = async (props: Params) => {
  const movie = await getMovieDetailsById(props.params.id);

  const bgImage = movie.backdrop_path || movie.poster_path;

  const infoChild = (
    <>
      {movie.adult && <span className={pill({ variant: "primary" })}>C18</span>}
      <span className={text({ size: "20-400" }, "opacity-50")}>
        {dayjs(movie.release_date).format("YYYY")}
      </span>
    </>
  );

  const bottomChild = (
    <Cast
      className="mt-35"
      mediaId={+props.params.id}
      type={props.params.mediaType}
    />
  );

  return (
    <motion.div
      className="flex flex-col max-lg:h-max overflow-hidden lg:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription
        className="max-w-[65ch]"
        infoChild={infoChild}
        title={movie.title}
        description={movie.overview}
        bottomChild={bottomChild}
      />
      <div className="mt-auto flex justify-between">
        <div>
          <p className={text({ size: "50-400" })}>movie</p>
          <p className={text({ size: "22-400" }, "opacity-20 mt-2")}>
            {movie.genres.map((el) => el.name).join(" / ")}
          </p>
        </div>
        <div>
          <p className={text({ size: "50-400" }, "flex items-center gap-7")}>
            {movie.vote_average.toFixed(1)}
            <RateIcon />
          </p>
          <p className={text({ size: "22-400" }, "opacity-20 mt-2")}>rate</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
