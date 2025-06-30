function Testing() {
  return (
    <div className="flex w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
      {/* Left section – fixed width */}
      <div className="w-1/4 flex items-center justify-start">
        {/* Logo with original styles */}
        <div className="text-left ml-30">
          <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Poppins] font-extrabold leading-tight">
            TecHubble
          </h1>
          <p className="text-black font-light text-xs sm:text-sm mt-1 ml-1">
            Private Limited
          </p>
        </div>
      </div>

{/* Right section – nav links */}
<div className="flex-grow mr-30 flex items-center justify-end gap-12">
  <div className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer text-black hover:text-blue-200 transition">
    HOME
  </div>
  <div className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer text-black hover:text-blue-200 transition">
    SOLUTIONS
  </div>
  <div className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer text-black hover:text-blue-200 transition">
    COMPANY
  </div>
  <div className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer text-black hover:text-blue-200 transition">
    RESOURCES
  </div>
  <button className="text-blue-600 font-semibold text-sm xl:text-base 2xl:text-lg px-4 xl:px-6 py-2 xl:py-3 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105">
    CONTACT US
  </button>
</div>

    </div>
  );
}

export default Testing;
