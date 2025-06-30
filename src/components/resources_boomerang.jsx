function Boomerang() {
  return (
    <div className="flex flex-col items-center justify-center w-full font-[Montserrat] bg-white relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-[36px] sm:text-[60px] font-semibold text-center pt-10 sm:pt-12 md:pt-2 z-10 ">
Have a look at the <span className="text-lightblue">impact!</span>      </h2>

      {/* Main Layout */}
      <div className="relative w-full flex items-center justify-center">
        {/* === SVG Boomerang (Hidden on Small Screens) === */}
        <img
          src="resources_main.svg"
          alt="Boomerang"
          className="w-full h-auto object-contain hidden sm:block"
        />

        {/* === LABELS: Only show on sm+ (original layout preserved) === */}
        <div className="hidden sm:block absolute top-[18%] left-[14%] text-[30px] font-medium text-greyshade">
          <div className="w-[14px] h-[100px] bg-lightblue"></div>
          <div className="w-[300px] pt-20">
            <ul className="list-disc list-inside">
              <li>needed a content hub for writers</li>
              <li>looking for motivation to write</li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-[4%] left-[14%] text-[30px] font-medium text-greyshade">
          <div className="w-[14px] h-[100px] bg-lightblue"></div>
          <div className="w-[300px] pt-20">
            <ul className="list-disc list-inside">
              <li>needed a content hub for writers</li>
              <li>looking for motivation to write</li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-[35%] left-[78%] text-[30px] font-medium text-greyshade">
          <div className="w-[14px] h-[100px] bg-lightblue absolute bottom-[85%] left-[95%]"></div>
          <div className="w-[300px] pt-20">
            <ul className="list-disc list-inside">
              <li>content planning tool for writing</li>
              <li>writing tips</li>
              <li>track writing and speed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* === TEXT FOR SMALL SCREENS === */}
      <div className="flex flex-col gap-6 sm:hidden text-left text-[18px] font-medium text-greyshade px-4 mt-10 w-full max-w-md">
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 bg-lightblue mt-2 rounded-sm"></span>
            <span>needed a content hub for writers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 bg-lightblue mt-2 rounded-sm"></span>
            <span>looking for motivation to write</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 bg-red-500 mt-2 rounded-sm"></span>
            <span>content planning tool for writing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 bg-red-500 mt-2 rounded-sm"></span>
            <span>writing tips</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-3 h-3 bg-red-500 mt-2 rounded-sm"></span>
            <span>track writing and speed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Boomerang;
