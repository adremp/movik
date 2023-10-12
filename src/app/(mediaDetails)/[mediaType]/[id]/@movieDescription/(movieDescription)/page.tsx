import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import * as motion from "@/components/motion/components";
import { getMovieDetailsById } from "@/shared/api";
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription
        infoChild={infoChild}
        title={movie.title}
        description={movie.overview}
        bottomChild={bottomChild}
      />
      <div className="mt-auto flex justify-between w-full">
        <div>
          <p className={text({ size: "50-400" })}>movie</p>
          <p className={text({ size: "22-400" }, "opacity-20 mt-2")}>
            {movie.genres.join(" / ")}
          </p>
        </div>
        <div>
          <p className={text({ size: "50-400" })}>{movie.vote_average}</p>
					<p className={text({size: "22-400"}, "opacity-20")}>rate</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
