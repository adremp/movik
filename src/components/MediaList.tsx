import Image from "next/image";
import styled from "styled-components";

export type MediaListItemType = {
  title: string;
  id: string;
  backgroundUrl: string;
};

interface MediaListProps {
  className?: string;
  title: string;
  items: MediaListItemType[];
}

const MediaList = (props: MediaListProps) => {
  return (
    <div className={props.className}>
      <Title>{props.title}</Title>
      <List>
        {props.items.map((el) => (
          <Item key={el.id}>
            <Image
              className="object-cover"
              fill
              src={el.backgroundUrl}
              alt=""
            />
            <ItemTitle>{el.title}</ItemTitle>
          </Item>
        ))}
      </List>
    </div>
  );
};

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.015rem;
  margin: 0 1rem;
`;

const List = styled.ul`
  display: flex;
  gap: 2.75rem;
  overflow-x: auto;
`;

const ItemTitle = styled.h3`
  opacity: 0;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
`;

const Item = styled.li`
  border-radius: 1.1875rem;
  position: relative;
  flex-shrink: 0;
  height: 18rem;
  width: 18rem;
  display: flex;
  box-shadow: 0px 0px 42px 0px rgba(22, 22, 22, 0.16);

  &::after {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    content: "";
    position: absolute;
    margin: auto;
    width: 5rem;
    height: 5rem;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    ${ItemTitle} {
      opacity: 1;
    }
  }
`;

export default MediaList;
