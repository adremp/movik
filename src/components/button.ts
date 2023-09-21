import styled from "styled-components";

export const TextButton = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => isActive ? "opacity: 1" : "opacity: 0.19"};
  color: #fff;
	white-space: nowrap;
	text-transform: uppercase;
  font-size: 2.5rem;
  letter-spacing: -0.0875rem;
`;

const DefaultButton = styled.button`
  border-radius: 0.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 131%;
  letter-spacing: -0.01125rem;
  display: inline-flex;
	align-items: center;
  gap: 0.25rem;
	padding: 0.38rem 0.5rem;
`;
export const PrimaryButton = styled(DefaultButton)`
  color: #000000;
  background: linear-gradient(0deg, #ffe24b 0%, #ffe24b 100%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.01) 100%
    );
`;

export const SecondaryButton = styled(DefaultButton)`
  border: 0.75px solid rgba(255, 255, 255, 0.52);
	color: white;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
`;
