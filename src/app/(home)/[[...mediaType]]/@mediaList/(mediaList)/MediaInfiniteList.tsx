import AnimLoad from "@/components/AnimLoad";
import MediaCard from "@/components/MediaCard";
import { ParamTypes } from "@/shared/api/const";
import { Media } from "@/shared/api/types";
import { useAppSelector } from "@/stores";
import { useHomeActions } from "@/stores/home";
import Link from "next/link";
import { CSSProperties, useEffect, useRef } from "react";
import { shallowEqual } from "react-redux";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList, ListOnScrollProps } from "react-window";

interface MediaInfiniteListProps {
  className?: string;
  paramType: ParamTypes;
  page: number;
}

interface RowProps {
  index: number;
  data: Media[];
  style: CSSProperties;
}
const Row = ({ data, index, style }: RowProps) => {
  return (
    <div
      style={style}
      className="grid grid-flow-col gap-x-[1%] auto-cols-[15.83%]"
    >
      {data.slice(index * 6, index * 6 + 6).map((el) => {
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

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchFullViewMedia();
  }, []);

  const { set, fetchFullViewMedia } = useHomeActions();

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
            itemData={data.results}
            itemCount={Math.ceil(data.results.length / 6)}
            itemSize={width / 4}
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
