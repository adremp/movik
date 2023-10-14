import { ReactElement } from "react";
import { mediaTypeParams } from "../layout";
import { Params } from "./_types";

interface Props {
  showDescription: ReactElement;
  movieDescription: ReactElement;
  movieVideos: ReactElement;
  showVideos: ReactElement;
}

const mapDescription: Record<string, keyof Props> = {
  movie: "movieDescription",
  show: "showDescription",
} satisfies Record<(typeof mediaTypeParams)[number], keyof Props>;

const mapVideos: Record<string, keyof Props> = {
  movie: "movieVideos",
  show: "showVideos",
} satisfies Record<(typeof mediaTypeParams)[number], keyof Props>;

const MoviesLayout = (props: Props & Params) => {
  const { mediaType } = props.params;

  const descriptionName = mapDescription[mediaType];
  const videoName = mapVideos[mediaType];

  return (
    <main className="p-page text-text-primary gap-x-20 h-full grid grid-rows-[1fr_auto] grid-cols-[1fr_auto]">
      {props[descriptionName]}
      <div className="row-span-2 h-full flex">{props[videoName]}</div>
    </main>
  );
};

export default MoviesLayout;
