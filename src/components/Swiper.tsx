"use client";

import { useBreakpoint } from "@/providers/breakpoint";
import getMatchBreakpoint from "@/shared/utils/getMatchBreakpoint";
import { cx } from "class-variance-authority";
import { Children, IframeHTMLAttributes, ReactNode, RefObject } from "react";
import { Swiper } from "swiper";
import "swiper/css";
import { register } from "swiper/element";
import { SwiperSlideProps } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { ConfigScreens } from "../../config";

register();

type Kebab<
  T extends string,
  A extends string = ""
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
  : A;

/**
 * Helper for converting object keys to kebab case because Swiper web components parameters are available as kebab-case attributes.
 * @link https://swiperjs.com/element#parameters-as-attributes
 */
type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends Object
    ? KebabObjectKeys<T[key]>
    : T[key];
};

/**
 * Swiper 9 doesn't support Typescript yet, we are watching the following issue:
 * @link https://github.com/nolimits4web/swiper/issues/6466
 *
 * All parameters can be found on the following page:
 * @link https://swiperjs.com/swiper-api#parameters
 */
type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };
interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
  ref?: RefObject<SwiperRef>;
  children?: ReactNode;
}
interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperContainerAttributes;
      "swiper-slide": SwiperSlideAttributes;
    }
  }
}

interface ISwiperProps {
  className?: string;
  breakpointSlides?: Partial<Record<keyof ConfigScreens, number>>;
  children: ReactNode;
  containerProps: Omit<SwiperContainerAttributes, "modules">;
  sliderProps: SwiperSlideAttributes;
}

const AppSwiper = (props: ISwiperProps) => {
  const breakpoint = useBreakpoint();

  const breakpointSlides =
    props.breakpointSlides &&
    getMatchBreakpoint(breakpoint, props.breakpointSlides);

  return (
    <div className={cx("select-none", props.className)}>
      <swiper-container
        slides-per-view={breakpointSlides}
        {...props.containerProps}
        // modules={[EffectCoverflow]}
        // effect={"coverflow"}
      >
        {Children.map(props.children, (el) => (
          <swiper-slide {...props.sliderProps}>{el}</swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export const SwiperIFrame = (
  props: IframeHTMLAttributes<HTMLIFrameElement>
) => (
  <iframe
    {...props}
    className={cx("hovered:pointer-events-none", props.className)}
  ></iframe>
);

export default AppSwiper;
