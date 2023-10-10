import routes from "@/shared/const/routes";
import action from "@/shared/styles/action";
import text from "@/shared/styles/text";
import Link from "next/link";

export const generateStaticParams = () =>
  ["shows", "movies"].map((el) => ({ type: [el] }));
export const dynamicParams = true;

// [title, href]
type ItemType = [string, string];
const items: ItemType[] = [
  ["all", routes.home()],
  ["tv show", routes.shows()],
  ["movie", routes.movies()],
  ["favorite", routes.favorites()],
];

export interface HomePageProps {
  searchParams: {
    movieId?: string;
  };
  params: { type?: string[] };
}

const Type = (props: HomePageProps) => {
  const mediaType = props.params.type?.[0] ?? "";

  return (
    <div className={"inline-flex text-text-primary gap-23"}>
      {items.map(([title, href]) => {
        const isCurrent = "/" + mediaType === href;
        return (
          <Link
            className={text(
              { size: "40" },
              action({ button: "opacity" }),
              "opacity-30 whitespace-nowrap",
              isCurrent && "opacity-100"
            )}
            href={href}
            key={title}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Type;
