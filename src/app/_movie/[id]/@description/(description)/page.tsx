import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import { getMovieDetailsById } from "@/shared/api";
import { Params } from "../../_types";

const Description = async (props: Params) => {
  const movie = await getMovieDetailsById(props.params.id);
	await new Promise((res) => setTimeout(res, 3000))

  const bgImage = movie.backdrop_path || movie.poster_path;

  return (
    <div>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription title={movie.title} description={movie.overview} />
    </div>
  );
};

export default Description;
