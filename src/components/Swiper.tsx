"use client";

import { useBreakpoint } from "@/providers/breakpoint";
import getMatchBreakpoint from "@/shared/utils/getMatchBreakpoint";
import { cx } from "class-variance-authority";
import { Children, ReactNode, RefObject, useMemo } from "react";
import { Swiper } from "swiper";
import SwiperCore from "swiper/core";
import "swiper/css";
import { register } from "swiper/element";
import { HashNavigation, Mousewheel, Virtual } from "swiper/modules";
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

SwiperCore.use([Mousewheel, Virtual, HashNavigation]);

type SwiperContainerAttributesWithBreakpoints = {
  [Key in keyof SwiperContainerAttributes]: Partial<
    Record<keyof ConfigScreens, SwiperContainerAttributes[Key]>
  >;
};

interface ISwiperProps {
  className?: string;
  children: ReactNode;
  containerProps: Omit<SwiperContainerAttributes, "modules">;
  containerPropsBreakpoints: SwiperContainerAttributesWithBreakpoints;
  sliderProps: SwiperSlideAttributes;
  sliderPropsList?: Record<string, string>[];
}

const AppSwiper = (props: ISwiperProps) => {
  const breakpoint = useBreakpoint();

  const breakpointProps = useMemo(() => {
    return (
      props.containerPropsBreakpoints &&
      Object.fromEntries(
        Object.entries(props.containerPropsBreakpoints).map(([prop, bps]) => {
          // @ts-ignore
          return [prop, getMatchBreakpoint(breakpoint, bps)];
        })
      )
    );
  }, [props.containerPropsBreakpoints, breakpoint]);

  return (
    <div
      className={cx(
        "select-none",
        props.className
      )}
    >
      <swiper-container {...breakpointProps} {...props.containerProps}>
        {Children.map(props.children, (el, i) => (
          <swiper-slide {...props.sliderProps} {...props.sliderPropsList?.[i]}>
            {el}
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default AppSwiper;
