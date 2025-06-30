function Homeoptions() {
  return (
    <div className="flex justify-center w-full ">
      {/* Outer Big Card */}
      <div className="bg-gray-100 border-white border-4 rounded-4xl p-6 shadow-md w-full sm:w-11/12 md:w-10/12 lg:w-9/12">
        
        {/* Inner Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col bg-white rounded-4xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col h-full">
              {/* Icon Section */}
              <div className="mb-6">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-400 shadow-md">
                  <div className="" 
                  /> {/* Placeholder for web.png */}
                <img src="web.png" alt="web" />
                </div>
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold font-montserrat mb-4 text-left leading-tight">
                    App Development
                  </h2>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
                    Build mobile and web applications that transform your business with scalable, modern tech stacks.
                  </p>
                </div>
                
                {/* Learn More Section - Always at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 items-center text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-200">
                    <p className="text-lg font-medium">Learn more</p>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg">→</span> {/* Placeholder for arrow_right.png */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white rounded-4xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col h-full">
              {/* Icon Section */}
              <div className="mb-6">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-400 shadow-md">
                  <div className="" /> {/* Placeholder for design.png */}
                  <img src="app.png" alt="design" />
                </div>
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold font-montserrat mb-4 text-left leading-tight">
                    UI/UX Design
                  </h2>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
                    Craft intuitive interfaces and seamless user experiences tailored to your brand and audience.
                  </p>
                </div>
                
                {/* Learn More Section - Always at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 items-center text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-200">
                    <p className="text-lg font-medium">Learn more</p>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg">→</span> {/* Placeholder for arrow_right.png */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white rounded-4xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col h-full">
              {/* Icon Section */}
              <div className="mb-6">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-400 shadow-md">
                  <div className="h-6 w-6 bg-white rounded" /> {/* Placeholder for seo.png */}
                </div>
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold font-montserrat mb-4 text-left leading-tight">
                    SEO Services
                  </h2>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
                    Improve your search visibility and rank higher with expert SEO strategies tailored to your niche.
                  </p>
                </div>
                
                {/* Learn More Section - Always at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 items-center text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-200">
                    <p className="text-lg font-medium">Learn more</p>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg">→</span> {/* Placeholder for arrow_right.png */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col bg-white rounded-4xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
            <div className="flex flex-col h-full">
              {/* Icon Section */}
              <div className="mb-6">
                <div className="h-14 w-14 flex items-center justify-center rounded-full bg-blue-400 shadow-md">
                  <div className=""  />{/* Placeholder for marketing.png */}
                <img src="block_chain.png" alt="block" />
                </div>
              </div>
              
              {/* Content Section - Grows to fill space */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold font-montserrat mb-4 text-left leading-tight">
                    Digital Marketing
                  </h2>
                  <p className="font-montserrat text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-left">
                    Amplify your brand's reach with data-driven campaigns across social, email, and search platforms.
                  </p>
                </div>
                
                {/* Learn More Section - Always at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 items-center text-blue-400 cursor-pointer hover:text-blue-500 transition-colors duration-200">
                    <p className="text-lg font-medium">Learn more</p>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-lg">→</span> {/* Placeholder for arrow_right.png */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Homeoptions;