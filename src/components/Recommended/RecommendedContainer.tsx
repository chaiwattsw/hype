interface RecommendedContainerProps {
  children: React.ReactNode;
}

const RecommendedContainer = ({ children }: RecommendedContainerProps) => {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-8 md:gap-16 my-8">
      {children}
    </div>
  );
};

export default RecommendedContainer;
