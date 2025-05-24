type Props = {
  children: React.ReactNode;
};

const MobileContainer = ({ children }: Props) => {
  return <div className="bg-white flex justify-center items-center">{children}</div>;
};

export default MobileContainer;
