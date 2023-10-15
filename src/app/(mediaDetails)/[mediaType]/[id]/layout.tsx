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
    <main className="p-page text-text-primary grid gap-x-20 max-lg:overflow-auto grid-rows-[1fr_max-content] h-full lg:grid-rows-[1fr_auto] lg:grid-cols-[1fr_auto]">
      {props[descriptionName]}
      {props[videoName]}
    </main>
  );
};

export default MoviesLayout;
