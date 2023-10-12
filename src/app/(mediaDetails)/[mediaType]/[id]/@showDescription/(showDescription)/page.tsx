import MediaBackgroundImage from "@/components/MediaBackgroundImage";
import MediaDescription from "@/components/MediaDescription";
import { getShowDetailsById } from "@/shared/api";
import { Params } from "../../_types";

const Description = async (props: Params) => {
  const show = await getShowDetailsById(props.params.id);

  const bgImage = show.backdrop_path || show.poster_path;

  return (
    <div>
      {bgImage && <MediaBackgroundImage src={bgImage} />}
      <MediaDescription title={show.title} description={show.overview} />
    </div>
  );
};

export default Description;
