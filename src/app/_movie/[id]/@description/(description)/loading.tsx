import text from "@/shared/styles/text";

interface DescriptionLoadingProps {}

const DescriptionLoading = (props: DescriptionLoadingProps) => {
  return <div className={text({ size: "100" }, "w-100 h-100 bg-primary")}>DescriptionLoading</div>;
};

export default DescriptionLoading;
