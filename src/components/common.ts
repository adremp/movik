import styled from "styled-components";


export const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
	left: 0;
  content: "";
  z-index: -1;
  display: block;
  min-width: 150%;
  min-height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

