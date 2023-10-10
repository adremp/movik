import { ReactElement } from "react";
import { Params } from "./_types";

interface Props extends Params {
  description: ReactElement;
  videos: ReactElement;
	children: ReactElement;
}

const MoviesLayout = (props: Props) => {
  return (
    <main className="p-page h-full grid gap-60 grid-cols-[40%_1fr]">
      {props.description}
      {props.videos}
    </main>
  );
};

export default MoviesLayout;
