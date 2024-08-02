export const PopularCard = () => {
  return (
    <div className="w-1/2 h-32 relative group -ml-4">
      <div className="text-xl lg:text-4xl w-full z-40 absolute left-8 lg:left-16 top-1/2 -translate-y-1/2">
        Coffee mochi
      </div>
      <div className="w-0 group-hover:w-11/12 h-full absolute top-0 left-0 bg-brand/40 z-10 transition-all duration-300 skew-x-12">
        <div className="w-0 group-hover:w-5/6 h-full absolute top-0 left-0 bg-brand/55 z-20 transition-all duration-500 delay-200 skew-x-8">
          <div className="w-0 group-hover:w-2/3 h-full absolute top-0 left-0 bg-brand z-30 transition-all duration-1000 delay-500 skew-x-4"></div>
        </div>
      </div>
    </div>
  );
};
