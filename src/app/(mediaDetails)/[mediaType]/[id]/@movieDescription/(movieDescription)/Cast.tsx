import { getMovieCredits, getShowCredits } from "@/shared/api";
import action from "@/shared/styles/action";
import text from "@/shared/styles/text";
import Link from "next/link";
import { MediaTypeParams } from "../../../layout";

const mapTypeFn = {
  movie: getMovieCredits,
  show: getShowCredits,
};

interface CastProps {
  className?: string;
  mediaId: number;
  type: MediaTypeParams;
}

const Cast = async (props: CastProps) => {
  const cast = (await mapTypeFn[props.type](props.mediaId)).slice(0, 5);

  return (
    <div
      className={text(
        { size: "24-500" },
        "flex flex-wrap line-clamp-2 child:whitespace-nowrap",
        props.className
      )}
    >
      {cast.map((el) => (
        <>
          <Link
            className={action({ link: "primary" }, "contents")}
            href={`/search?cast=${el.name}`}
          >
            {el.name}
          </Link>
          {el === cast.at(-1) ? "..." : ", "}
        </>
      ))}
    </div>
  );
};

export default Cast;
