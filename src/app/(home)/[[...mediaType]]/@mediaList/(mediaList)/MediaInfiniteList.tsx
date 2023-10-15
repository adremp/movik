import AnimLoad from "@/components/AnimLoad";
import MediaCard from "@/components/MediaCard";
import { useBreakpoint } from "@/providers/breakpoint";
import { ParamTypes } from "@/shared/api/const";
import { Media } from "@/shared/api/types";
import getMatchBreakpoint from "@/shared/utils/getMatchBreakpoint";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { CSSProperties, useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList, ListOnScrollProps } from "react-window";
import { ConfigScreens } from "../../../../../../config";

interface MediaInfiniteListProps {
  className?: string;
  paramType: ParamTypes;
  page: number;
}

const rowBreakpointParams: Partial<
  Record<keyof ConfigScreens, { rowCls: string; rowCount: number }>
> = {
  xs: { rowCls: "gap-[5%] auto-cols-[30%]", rowCount: 3 },
  md: { rowCls: "gap-[2.5%] auto-cols-[23.75%]", rowCount: 4 },
  lg: { rowCls: "gap-x-[1%] auto-cols-[15.83%]", rowCount: 6 },
};

interface RowProps {
  index: number;
  data: { items: Media[]; cls: string; rowCount: number };
  style: CSSProperties;
}
const Row = ({ data, index, style }: RowProps) => {
  return (
    <div style={style} className={cx("grid grid-flow-col", data.cls)}>
      {data.items
        .slice(index * data.rowCount, index * data.rowCount + data.rowCount)
        .map((el) => {
          if (!el) return <></>;
          return (
            <AnimLoad
              key={el.id}
              variants={{
                default: { translateY: "0%", opacity: 1 },
                load: { translateY: "20%", opacity: 0 },
              }}
            >
              <Link href={el.href}>
                <MediaCard
                  image={el.poster_path || el.backdrop_path || ""}
                  title={el.title}
                />
              </Link>
            </AnimLoad>
          );
        })}
    </div>
  );
};

const MediaInfiniteList = (props: MediaInfiniteListProps) => {
  const { data, loading, scrollTop } = useAppSelector(
    (s) => ({
      data: s.home.fullViewMediaResponse,
      loading: s.home.fullViewLoading,
      scrollTop: s.home.mediaScrollTop,
    }),
    shallowEqual
  );
  const { set, fetchFullViewMedia, resetView } = useHomeActions();
  const breakpoint = useBreakpoint();
  const bpParams = getMatchBreakpoint(breakpoint, rowBreakpointParams);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchFullViewMedia();
  }, []);

  useEffect(() => {
    const onPop = () => resetView();
    window.addEventListener("popstate", onPop);
    window.removeEventListener("popstate", onPop);
  }, []);

  if (!data) return <></>;

  const onScroll = (props: ListOnScrollProps) => {
    const c = containerRef.current;
    if (c && !loading && c.scrollHeight - c.scrollTop - c.clientHeight < 500) {
      fetchFullViewMedia();
    }
    set({ mediaScrollTop: props.scrollOffset });
  };

  return (
    <div className="h-full w-full">
      <AutoSizer>
        {({ width, height }) => (
          <FixedSizeList
            outerRef={containerRef}
            initialScrollOffset={scrollTop}
            onScroll={onScroll}
            className="scrollbar"
            itemData={{
              items: data.results,
              cls: bpParams.rowCls,
              rowCount: bpParams.rowCount,
            }}
            itemCount={Math.ceil(data.results.length / bpParams.rowCount)}
            itemSize={width / ((bpParams.rowCount * 2) / 3)}
            width={width}
            height={height}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};

export default MediaInfiniteList;
