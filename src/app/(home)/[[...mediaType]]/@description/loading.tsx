import text from "@/shared/styles/text";

interface LoadingProps {}

const Loading = (props: LoadingProps) => {
  return <div className={text({ size: "40" })}>Loading...</div>;
};

export default Loading;
