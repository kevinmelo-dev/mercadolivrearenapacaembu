type ContainerProps = {
  children: React.ReactNode;
  className?: string
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`mt-10 ${className}`}>{children}</div>;
};

export default Container;
