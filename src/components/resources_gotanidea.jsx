function GotanIdea() {
  return (
    <div className="px-4 py-8 flex flex-col items-center bg-white">
      {/* Main Heading */}
      <h2 className="text-lightblue font-[Montserrat] font-normal text-[36px] sm:text-[48px] md:text-[64px] lg:text-[75.28px] text-center leading-none mb-6">
        Got an idea?
      </h2>

      <h2 className="text-center font-[Montserrat] font-normal text-[20px] sm:text-[32px] md:text-[40px] lg:text-[49.8px] leading-tight tracking-tight bg-[#2CB6DB] px-6 py-4 rounded mb-10 text-white">
        Don’t worry we have got you covered
      </h2>

      {/* Box Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mt-10 w-full max-w-7xl">
        {[
          {
            title: <>Idea <br /><span className="text-lightblue">Validation</span></>,
            text: `Each product starts with a similar goal of creating an impact. We assess and work with you to ensure that your idea not only survives but thrives in the market. Our solutions are based on market research and we make sure to leverage years of data in order to reduce risk.`,
          },
          {
            title: <>Minimum <br /><span className="text-lightblue">Viable</span> <br /> <span className="text-lightblue">Product</span></>,
            text: `We develop your idea into a Minimum Viable Product. The goal is to create a product that disrupts the market and stands out in the digital and physical space. We at TecHubble ensure that all resources are utilized to their maximum, be it man force, funds or efforts.`,
          },
          {
            title: <>Idea <br /><span className="text-lightblue">Validation</span></>,
            text: `When your product is ready to launch, we help you define your target market. We at TecHubble consider your audience, its needs, and demands. Then, we use research and data to ensure your product is welcomed in the market.`,
          }
        ].map((box, index) => (
          <div
            key={index}
            className="w-full max-w-sm mx-auto  p-6 shadow-md rounded-lg bg-white"
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-[20px] sm:text-[22.87px] font-semibold font-[Montserrat] leading-snug">
                {box.title}
              </h3>
              <img src="/PMF.svg" alt={`Icon ${index + 1}`} className="w-16 h-auto" />
            </div>
            <p className="mt-4 text-greyshade text-[15px] leading-relaxed text-justify">
              {box.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Highlight Section */}
      {/* <div
        className="w-full mt-20 flex items-center justify-center text-white text-center px-4 py-10"
        style={{
          background: 'linear-gradient(89.97deg, rgba(33, 162, 163, 0.88) 0.02%, rgba(44, 182, 219, 0.88) 99.98%)',
        }}
      >
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-5xl font-[Montserrat]"
        >
          With over 200+ luminaries (our team) in 3 global markets, we ensure an exceptional product that creates a difference.
        </h2>
      </div> */}
    </div>
  );
}

export default GotanIdea;
