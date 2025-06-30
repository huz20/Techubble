function Capabilities() {
  return (
    <div className="w-full md:w-[80%] mx-auto flex justify-center py-20 px-4 md:px-70">
      <div className="flex flex-col w-full">
        <h1 className="text-[36px] sm:text-[36px] md:text-[60px] font-semibold text-center mb-10 md:mb-20 text-greyshade">
          Our <span className="text-[#4BB0E6]">Capabilities</span>
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            'Data Management',
            'Access Control',
            'Notifications & Alerts',
            'Advertising Solutions',
            'Enterprise Search',
            'Data & Analytics',
            'Industry Analysis',
            'E-commerce Solutions',
          ].map((title, idx) => (
            <div
              key={idx}
              className="w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5] border-[0.5px] border-gray-200 p-3 sm:p-4 flex flex-col mx-auto"
            >
              <h2 className="text-left text-greyshade text-base sm:text-lg md:text-[26px] font-medium mb-2">
                {title}
              </h2>
              <div className="flex justify-center items-center flex-grow">
                <img
                  src="data_management.svg"
                  alt={title}
                  className="max-h-[60%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
