import PlayIcon from "@/shared/assets/play.svg";
import button from "@/shared/styles/button";

interface AddListButtonProps {
  className?: string;
}

const AddListButton = (props: AddListButtonProps) => {
  return (
    <button className={button({ variant: "secondary" })}>
      <PlayIcon />
      Add List
    </button>
  );
};

export default AddListButton;
