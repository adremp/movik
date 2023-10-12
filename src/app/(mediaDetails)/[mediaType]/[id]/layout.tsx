import { ReactElement } from "react";
import { mediaTypeParams } from "../layout";
import { Params } from "./_types";

interface Props {
  showDescription: ReactElement;
  movieDescription: ReactElement;
  videos: ReactElement;
}

const mapDescription: Record<string, keyof Props> = {
  movie: "movieDescription",
  show: "showDescription",
} satisfies Record<(typeof mediaTypeParams)[number], keyof Props>;

const MoviesLayout = (props: Props & Params) => {
  const { mediaType } = props.params;

  const descriptionEl = mapDescription[mediaType];

  return (
    <main className="p-page h-full grid gap-[25%] grid-cols-[1fr_1fr]">
      {props[descriptionEl]}
      {props.videos}
    </main>
  );
};

export default MoviesLayout;
