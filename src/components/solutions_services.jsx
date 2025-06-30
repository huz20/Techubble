function Services() {
  return (
<section className="w-full md:w-[80%] mx-auto py-16 bg-white">
  {/* 🔹 Heading */}
  <h2 className="font-montserrat font-semibold text-[60px] leading-[50px] text-center mb-20">
Our Services  </h2>

  {/* 🔹 Content Wrapper */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-6 space-y-10 lg:space-y-0 lg:space-x-12">

    {/* 🔸 Left Column - Text Content */}
    <div className="lg:w-2/3 space-y-10 ">
      {/* Intro Text */}
        <h2 className="font-montserrat font-semibold text-[60px] leading-[70px] text-left mb-10 text-[#616161]">
Idea <br/>Validation  </h2>
      <p className="font-montserrat text-[24px] text-greyshade leading-[157%] tracking-[2%] pr-10">
Each product starts with a similar goal of creating an impact. We assess and work with you to ensure that your idea not only survives but thrives in the market. Our solutions are based on market research and we make sure to leverage years of data in order to reduce risk.      </p>

      {/* 🔹 Bullet Point: Research */}
     <div className="flex items-center ">
  <div className="flex items-center gap-4">
    {/* First Pair */}
    <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
          <h4 className="font-montserrat  text-[23.81px] text-lightblue leading-[157%] tracking-[2%]">
        Define Goal
      </h4>
    <div className="flex items-center gap-4">
      {/* Second Pair */}
      <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
      <h4 className="font-montserrat text-[23.81px] text-lightblue leading-[157%] tracking-[2%]">
        Define Goal
      </h4>
    </div>
  </div>
</div>

      {/* You can repeat bullet sections below if needed */}
    </div>

    {/* 🔸 Right Column - Centered Image */}
<div
  className="w-full sm:w-2/3 lg:w-1/3 h-[550px] flex justify-center rounded-2xl mb-12 pt-20"
  style={{ boxShadow: '0px 0px 50px 0px #0000001A' }}
>
  <img
    src="/solutions_our_services.svg"
    alt="Illustration"
    className="w-[280px] sm:w-[350px] md:w-[488px] h-auto sm:h-[300px] md:h-[400px] object-contain rounded-[20px]"
  />
</div>



  </div>






















{/* 🔹 Second Content Wrapper (Image on Left, Text on Right) */}
<div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start mt-20 px-4 lg:px-6">
  
  {/* 🔸 Left Column - Image */}
<div
  className="w-full sm:w-2/3 lg:w-1/3 h-[550px] flex justify-center rounded-2xl mb-12 pt-20"
  style={{ boxShadow: '0px 0px 50px 0px #0000001A' }}
>
  <img
    src="/solutions_our_services.svg"
    alt="Illustration"
    className="w-[280px] sm:w-[350px] md:w-[488px] h-auto sm:h-[300px] md:h-[400px] object-contain rounded-[20px]"
  />
</div>


  {/* 🔸 Right Column - Text Content */}
  <div className="lg:w-2/3 space-y-10 lg:pl-12">
    <h2 className="font-montserrat font-semibold text-[60px] leading-[70px] text-left mb-10 text-[#616161]">
      Minimal Viable  <br /> Product
    </h2>
    <p className="font-montserrat text-[24px] text-greyshade leading-[157%] tracking-[2%]">
      Each product starts with a similar goal of creating an impact. We assess and work with you to ensure that your idea not only survives but thrives in the market. Our solutions are based on market research and we make sure to leverage years of data in order to reduce risk.
    </p>

    {/* 🔹 Bullet Points: Now in columns */}
    <div className="flex  gap-x-8 gap-y-4"> 
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
        <h4 className="font-montserrat text-[23.81px] text-lightblue leading-[157%] tracking-[2%]">
          Define Goal
        </h4>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 bg-[#D9D9D9] rounded-full"></div>
        <h4 className="font-montserrat text-[23.81px] text-lightblue leading-[157%] tracking-[2%]">
          Research Market
        </h4>
      </div>

    </div>
  </div>
</div>

</section>





  );
}
export default Services;