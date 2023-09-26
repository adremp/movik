import Image, { ImageProps } from "next/image";
import styled from "styled-components";

export const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: -1;
  display: block;
  min-width: 100%;
  min-height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const BackgroundImage = styled((props: Omit<ImageProps, "fill">) => (
  <Image {...props} fill />
))`
  object-fit: cover;
  z-index: -1;
`;

export const ScrollableContainer = styled.main`
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
