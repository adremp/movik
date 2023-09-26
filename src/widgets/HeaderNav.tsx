import { TextButton } from "@/components/button";
import { useAppSelector } from "@/stores";
import { HomeState, useHomeActions } from "@/stores/home";
import styled from "styled-components";

// [title, type]
type ItemType = [string, HomeState["contentType"]];
const items: ItemType[] = [
  ["all", "all"],
  ["tv show", "show"],
  ["movie", "movie"],
  ["favorite", "favorite"],
];

const HeaderNav = () => {
  const currentType = useAppSelector((s) => s.home.contentType);
  const { set } = useHomeActions();

  return (
    <Wrapper>
      {items.map(([title, type]) => (
        <TextButton
          isActive={type === currentType}
          key={title}
          onClick={() => set({ contentType: type })}
        >
          {title}
        </TextButton>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: var(--font-staatliches);
  display: flex;
  gap: 1.5rem;
	padding: 0 2rem;
  margin-bottom: 3rem;
	margin-top: 2rem;
`;

export default HeaderNav;
