import skeleton from "@/shared/styles/skeleton";

interface VideosLoadingProps {}

const VideosLoading = (props: VideosLoadingProps) => {
  return <div className={skeleton({ variant: "primary" })}></div>;
};

export default VideosLoading;
