"use client";

import { ParamTypes } from "@/shared/api/const";
import text from "@/shared/styles/text";
import { useHomeActions } from "@/stores/home";

interface MoreVideosButtonProps {
  className?: string;
  paramType: ParamTypes;
}

const MoreVideosButton = (props: MoreVideosButtonProps) => {
  const { set } = useHomeActions();

  const onClick = () => {
    set({ animViewType: "full", fullViewParamType: props.paramType });
  };

  return (
    <button
      onClick={onClick}
      className={text(
        { size: "18-500" },
        "uppercase hovered:hover:opacity-100 transition-opacity opacity-40"
      )}
    >
      More
    </button>
  );
};

export default MoreVideosButton;
