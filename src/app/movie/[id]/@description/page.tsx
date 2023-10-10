import MediaDescription from "@/components/MediaDescription";
import { getMovieDetailsById } from "@/shared/api";
import { Params } from "../_types";
import MediaBackgroundImage from "@/components/MediaBackgroundImage";

const Description = async (props: Params) => {
  const movie = await getMovieDetailsById(props.params.id);

	const bgImage = movie.backdrop_path || movie.poster_path
	
  return (
    <div>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription title={movie.title} description={movie.overview} />
    </div>
  );
};

export default Description;
