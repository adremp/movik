import skeleton from "@/shared/styles/skeleton";

interface DescriptionLoadingProps {}

const DescriptionLoading = (props: DescriptionLoadingProps) => {
  return (
    <div className="flex flex-col gap-20">
      <div className={skeleton({ variant: "primary" }, "h-100")}></div>
      <div className={skeleton({ variant: "primary" }, "h-200 mt-20")}></div>
      <div className={skeleton({ variant: "primary" }, "h-100 mt-auto")}></div>
    </div>
  );
};

export default DescriptionLoading;
