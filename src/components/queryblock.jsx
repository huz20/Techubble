function QueryBlock() {
  return (
    <div className="bg-lightblue p-4 sm:p-6 lg:p-8 rounded-t-[50px] sm:rounded-t-[75px] lg:rounded-t-[100px] shadow-md relative overflow-hidden min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 rounded-t-[50px] sm:rounded-t-[75px] lg:rounded-t-[100px]"
        style={{
          background: 'linear-gradient(243.22deg, #21A2A3 4.45%, #2CB6DB 87%)',
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white text-center px-4 mb-4">
          Have an idea to discuss?
        </div>
        
        {/* Subtitle */}
        <div className="text-lg sm:text-xl lg:text-2xl xl:text-4xl text-white text-center px-4 mb-8 sm:mb-12 max-w-4xl">
          We'd love to hear about your project,
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          reach out to us for a no-obligation call.
        </div>

        {/* Form Container */}
        <div className="w-full max-w-6xl px-4">
          {/* Input Sections - Responsive Layout */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0 justify-center items-stretch">
            {/* Left Section - 3 inputs */}
            <div className="flex flex-col space-y-4 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Name*"
                className="w-full lg:w-[300px] xl:w-[350px] rounded-full bg-white px-4 py-3 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full lg:w-[300px] xl:w-[350px] rounded-full bg-white px-4 py-3 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Contact Number*"
                className="w-full lg:w-[300px] xl:w-[350px] rounded-full bg-white px-4 py-3 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Right Section - Query input */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <textarea
                placeholder="Query*"
                className="w-full lg:w-[300px] xl:w-[350px] h-full lg:min-h-[140px] rounded-xl bg-white px-4 py-3 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder:text-start placeholder:align-top text-sm sm:text-base"
        
              />
            </div>
          </div>

          {/* Centered Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
            <button className="bg-white text-lightblue font-bold px-8 sm:px-10 lg:px-12 py-3 lg:py-4 rounded-full  text-sm sm:text-base lg:text-lg ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryBlock;