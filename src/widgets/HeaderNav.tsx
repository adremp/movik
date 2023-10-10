import { cx } from "class-variance-authority";

interface HeaderNavProps {
  className?: string;
}

const HeaderNav = (props: HeaderNavProps) => {
  return (
    <div className={cx("inline-flex gap-23 h-min", props.className)}>
      {/* {items.map(([title, href]) => (
        <Link className={text({ size: "40" }, 'whitespace-nowrap')} href={href} key={title}>
          {title}
        </Link>
      ))} */}
    </div>
  );
  // return (
  //   <div className="main">
  // {items.map(([title, type]) => (
  // <TextButton
  //   isActive={type === currentType}
  //   key={title}
  //   onClick={() => set({ contentType: type })}
  // >
  //   {title}
  // </TextButton>
  // ))}
  //   </div>
  // );
};

// const Container = styled.div`
//   gap: 1.5rem;
//   padding: 0 2rem;
//   margin-bottom: 3rem;
//   margin-top: 2rem;
// `;

export default HeaderNav;
