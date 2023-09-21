import { SecondaryButton } from "@/components/button";
import PlayIcon from "@/shared/assets/play.svg";

interface AddListButtonProps {
  className?: string;
}

const AddListButton = (props: AddListButtonProps) => {
  return (
    <SecondaryButton className={props.className}>
      <PlayIcon />
      Add List
    </SecondaryButton>
  );
};

export default AddListButton;
