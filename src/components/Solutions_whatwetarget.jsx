function WhatWeTarget() {
  return (
    <div className="w-full md:w-[80%] mx-auto px-4 sm:px-6 py-20">
      {/* 🔹 Main Heading */}
      <h2 className="font-montserrat font-semibold text-[36px] md:text-[60px] leading-[50px] text-center mb-16">
        What We <span className="text-lightblue">Deliver</span>
      </h2>

      {/* 🔹 Container Box */}
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* 🔹 Big Left Box */}
        <div className="w-full md:w-[40%] bg-white rounded-[20px] p-6 md:p-8 shadow-[0_4px_15px_0_#00000026]">
          <img
            src="company_block_2_product.svg"
            alt="icon"
            className="w-28 h-28 mb-4"
          />
          <h3 className="font-montserrat font-bold text-[28px] md:text-[36.3px] leading-[110%] text-lightblue mb-2">
            Impactful Products
          </h3>
          <p className="font-montserrat font-normal text-[16px] md:text-[25px] text-greyshade leading-[140%] text-justify pt-2">
            All ideas while worth it, may differ in impact. We take you on from
            ideation and ensure that your idea reaches its maximum potential in
            order to make the right kind of impact when executed and launched in
            the market.
          </p>
        </div>

        {/* 🔹 Right Section – 4 Small Boxes */}
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: 'products.svg',
              title: 'Faster Products',
              text: 'Get a head start with our proven technology platform used by Global 500 companies and leading startups.',
            },
            {
              icon: 'leverage.svg',
              title: 'Leverage Data',
              text: 'Gather critical intelligence to make informed business decisions. We help you with data by providing intelligence through visualization, slicing & dicing, interactive tables & graphs, and real-time integration.',
            },
            {
              icon: 'ideal_market.svg',
              title: 'Ideal Market',
              text: 'Discovering product-market fit requires technology and an interdisciplinary approach. TecHubble’s pre-built technology platform gives you the power.',
            },
            {
              icon: 'shrink-screen.svg',
              title: 'Risk Management',
              text: 'Our approach ensures a high-quality MVP built and the discovery of the right product-market fit.',
            },
          ].map((box, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] border border-[#ccc] p-6 shadow-[0_4px_15px_0_#00000026]"
            >
              <img src={box.icon} alt="icon" className="w-20 h-20 mb-3" />
              <h4 className="font-montserrat font-bold text-[20px] md:text-[24px] text-lightblue mb-1">
                {box.title}
              </h4>
              <p className="font-montserrat text-[14px] text-greyshade leading-[140%] text-justify pt-2">
                {box.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeTarget;
