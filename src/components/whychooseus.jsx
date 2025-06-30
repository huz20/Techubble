function Whychooseus() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 py-12 bg-greyshade">
      
      {/* Title */}
      <h1 className="font-montserrat font-semibold text-[40px] sm:text-[60px] md:text-[80px] leading-[100%] tracking-[0%] text-lightblue mb-8">
        Why Choose Us
      </h1>

      {/* Subtitle */}
      <p
        className="font-montserrat text-greyshade text-[18px] sm:text-[20px] md:text-[24px] leading-[100%] text-center max-w-4xl"
        style={{
          fontWeight: 400,
          letterSpacing: '0%',
        }}
      >
        Sometimes, we need to check the time, wondering when our work or meeting <br />
        will finish, without getting caught by others.
      </p>

      {/* Content Blocks */}
      <div className="flex flex-col sm:flex-col md:flex-row flex-wrap justify-center items-start gap-8 w-full">

        {/* Image Block */}
        <div className="flex flex-col w-full sm:w-5/6 md:w-[800px] p-4">
          <div className="flex items-start justify-between mb-2 gap-4">
            <img src="whychooseus.png" alt="arrow" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Text Block */}
        <div className="flex flex-col w-full sm:w-5/6 md:w-[520px] pt-20">
          {/* Title */}
          <div className="text-left mb-2">
            <h2 className="font-montserrat text-greyshade text-[23px] font-normal leading-[153%]">
              A Plan for Success
            </h2>
          </div>

          {/* Description */}
          <div className="font-montserrat text-greyshade font-normal text-[14px] leading-[153%] py-6 text-justify">
            You want results. We have found that the best way to get them is with upfront research – of your company,
            competitors, target market, and customer psychographics. Only after we fully understand
            you and your customers, do we recommend a plan of attack.
          </div>

          {/* Icon List */}
          <div className="flex flex-col gap-6 pt-4">
            {[
              { icon: "icon1.png", text: "Experts Only" },
              { icon: "icon2.png", text: "Meeting Deadlines" },
              { icon: "icon3.png", text: "Award-Winning Projects" },
              { icon: "icon3.png", text: "Attention to Detail" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={item.icon} alt={`Icon ${index + 1}`} className="w-10 h-10 object-contain" />
                <p className="font-montserrat font-normal text-[18px] leading-[153%] text-greyshade text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Whychooseus;
