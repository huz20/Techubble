function Company_block() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Centered Heading */}
      <h2 className="font-montserrat font-semibold text-[36px] sm:text-[48px] md:text-[60px] leading-[50px] tracking-normal text-center text-lightblue pb-20">
        Company
      </h2>

      {/* Row: Text left, Image right */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-[1600px] mx-auto gap-12">

        {/* Left Text - Increased Width */}
        <div className="w-full md:w-[50%] text-center md:text-left">
          <p className="font-montserrat font-normal text-[20px] leading-[157%] tracking-[0.02em] text-gray-700">
TecHubble is a digital product studio. Our forte is to help you transform your ideas into genuine products that have the power to make an impact in the market. Over the years, we have mastered a platform that can aid in creating a viable product with maximum resource utilization within a minimum time. We assist startups and enterprises, ensuring that all your funds are utilized to their full potential. We house a team of technology experts with versatile experience. We center our approach on more than a decade of research and practices; better end-user products result in better outcomes for entrepreneurs and businesses.

            <br /><br />
When a new product launches in the market, many challenges arise most of them being external rather than internal. It all starts with hiring a like-minded team that understands your passion and has the technical ability to create the desired outcome. In addition to the required man force, budgets become a big hassle. In today’s technical world, gaining funds for a potential product is not that big of a hassle but optimizing those funds become a rather big one. Product development and innovation cost a lot monetarily when one isn't able to comprehend the market and end-user goal. 
Considering all these different scenarios TecHubble started with an agenda to help eliminate these core issues of creating and launching new technology. 
          </p>
        </div>

        {/* Right Image - Increased Height */}
        <div className="w-full md:w-[50%] flex justify-center">
          <img
            src="/company_block.svg"
            alt="Description"
            className="w-full h-[650px] object-cover rounded-[20px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
export default Company_block;
