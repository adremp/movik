import { cva } from "class-variance-authority";
import createVariants from "../utils/createVariants";
import action from "./action";
import text from "./text";

const style = cva(
  [
    text({ size: "18-700" }),
    action({ button: "opacity" }),
    "inline-flex items-center user-select border-[0.75px] gap-4 py-6 px-8 rounded-4",
  ],
  {
    variants: {
      variant: {
        default: ["bg-black"],
        primary: ["text-primary-inverted bg-yellow"],
        secondary: [
          "text-text-primary bg-opacity-dark border-[rgba(255, 255, 255, 0.52)]",
        ],
      },
    },
  }
);

export default createVariants(style);

// export const TextButton = styled.button<{ isActive: boolean }>`
//   ${({ isActive }) => isActive ? "opacity: 1" : "opacity: 0.2"};
//   color: ${({theme}) => theme.colors.textPrimary};
// 	white-space: nowrap;
// 	text-transform: uppercase;
//   font-size: 4rem;
//   letter-spacing: -0.14rem;
// `

// const DefaultButton = styled.button`
// border-radius: 0.25rem;
// font-size: 1.125rem;
// font-weight: 700;
// line-height: 131%;
// letter-spacing: -0.01125rem;
// display: inline-flex;
// align-items: center;
// gap: 0.25rem;
// padding: 0.38rem 0.5rem;
// `;
// export const PrimaryButton = styled(DefaultButton)`
// color: #000000;
// background: linear-gradient(0deg, #ffe24b 0%, #ffe24b 100%),
//   linear-gradient(
//     180deg,
//     rgba(255, 255, 255, 0.16) 0%,
//     rgba(255, 255, 255, 0.01) 100%
//   );
// `;

// export const SecondaryButton = styled(DefaultButton)`
// border: 0.75px solid rgba(255, 255, 255, 0.52);
// color: white;
// background: linear-gradient(
//   180deg,
//   rgba(255, 255, 255, 0.16) 0%,
//   rgba(255, 255, 255, 0.01) 100%
// );
// `;
