interface LoadingProps {
  className?: string;
}

const Loading = (props: LoadingProps) => {
  return (
    <div className={`${props.className ?? ""} `}>
      <h1>Description loading...</h1>
    </div>
  );
};

export default Loading;
