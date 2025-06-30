function Solutions_home() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10  bg-grey-shade pt-12">
      {/* Title */}
      <h1 className="text-[40px] sm:text-[60px] md:text-[80px] leading-[50px] sm:leading-[60px] md:leading-[80px] font-semibold font-montserrat text-lightblue">
        Solutions
      </h1>

      {/* Intro Paragraph */}
      <p className="text-[20px] sm:text-[28px] md:text-[35px] leading-[32px] sm:leading-[40px] md:leading-[46px] font-normal font-montserrat text-greyshade text-justify py-18 max-w-5xl">
        At TecHubble, we are evolving every day. We are working on building our
        solutions around your business needs.
      </p>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 w-full px-2 sm:px-4">
        
        {/* === Card One === */}
        <div className="flex flex-col w-full sm:w-5/6 md:w-[48%] bg-white drop-shadow-xl rounded-4xl p-6 sm:p-10 xl:p-12">
          <div className="flex items-start justify-between mb-2 gap-4">
            {/* Left Heading */}
            <div className="flex-1 text-left">
              <h2 className="text-[32px] sm:text-[38px] md:text-[45px] leading-[1.2] font-semibold font-montserrat text-greyshade">
                Minimum<br />
                <span className="text-lightblue">Viable</span><br />
                <span className="text-lightblue">Product</span>
              </h2>
            </div>
            {/* Image */}
            <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex-shrink-0 flex items-center justify-center">
              <img src="mvp.svg" alt="Minimum Viable Product" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="font-montserrat text-greyshade text-sm sm:text-base md:text-lg lg:text-xl p-2 py-6 text-justify">
            We develop your idea into a Minimum Viable Product. Our goal is to help you create a product that disrupts the market and stands out in the digital and physical space. We at TecHubble ensure that all resources are utilized to their maximum, be it man force, funds or efforts.
          </div>
        </div>

        {/* === Card Two === */}
        <div className="flex flex-col w-full sm:w-5/6 md:w-[48%] bg-white drop-shadow-xl rounded-4xl p-6 sm:p-10 xl:p-12">
          <div className="flex items-start justify-between mb-2 gap-4">
            {/* Left Heading */}
            <div className="flex-1 text-left">
              <h2 className="text-[32px] sm:text-[38px] md:text-[45px] leading-[1.2] font-semibold font-montserrat text-greyshade">
                Product<br />
                <span className="text-lightblue">Market </span>
                <span className="text-lightblue">Fit</span>
                
              </h2>
            </div>
            {/* Image */}
            <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex-shrink-0 flex items-center justify-center">
              <img src="PMF.svg" alt="Product Market Fit" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="font-montserrat text-greyshade text-sm sm:text-base md:text-lg lg:text-xl p-2 py-6 text-justify">
            We develop your idea into a Minimum Viable Product. Our goal is to help you create a product that disrupts the market and stands out in the digital and physical space. We at TecHubble ensure that all resources are utilized to their maximum, be it man force, funds or efforts.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Solutions_home;
