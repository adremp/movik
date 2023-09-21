import { ReactNode } from "react";
import styled from "styled-components";

interface MediaDescriptionProps {
  title: string;
  description: string;
  infoChild?: ReactNode;
  endChild?: ReactNode;
}
const MediaDescription = (props: MediaDescriptionProps) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <InfoWrapper>{props.infoChild}</InfoWrapper>
      <Description>{props.description}</Description>
      {props.endChild}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 65ch;
	z-index: 2;
`;

const Title = styled.h1`
  color: #fff;
  font-family: var(--font-staatliches);
  font-size: 7rem;
  line-height: 90%;
  letter-spacing: -0.14rem;
  text-transform: uppercase;
`;

const Description = styled.p`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  color: #fff;
  font-size: 1.25rem;
  line-height: 132%;
  letter-spacing: -0.0125rem;
`;

const InfoWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: -0.0125rem;
`;

export default MediaDescription;
