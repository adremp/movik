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
    <header>
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
    </header>
  );
};

const Wrapper = styled.div`
  font-family: var(--font-staatliches);
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export default HeaderNav;
