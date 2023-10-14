"use client"

import { useHomeActions } from "@/stores/home";

interface ToFullViewButtonProps {
  className?: string;
}

const ToFullViewButton = (props: ToFullViewButtonProps) => {
	const {set} = useHomeActions()
  return <div className={"rounded-[50%] bg-primary"}>ToFullViewButton</div>;
};

export default ToFullViewButton;
