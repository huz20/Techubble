function Howework() {
  return (
    <div className="py-12 px-4 md:px-0 w-full md:w-[80%] mx-auto font-[Montserrat] space-y-16 pt-40">
      {/* Main Heading */}
      <h1 className="text-[36px] md:text-[60px] font-semibold leading-[1.2] text-center text-black">
        How <span className="text-lightblue">we Work</span>
      </h1>

      {/* Subheading */}
      <p className="text-[20px] md:text-[32px] font-light leading-snug text-justify text-greyshade pb-20">
        Our product development approach is unique and borrowed from the automobile industry. 
        We have a platform with pre-built baseline components, and you can put a custom layer 
        on top to create a fantastic product. It is a{" "}
        <span className="text-lightblue">proven</span>,{" "}
        <span className="text-lightblue">fast</span>,{" "}
        <span className="text-lightblue">efficient</span>, and{" "}
        <span className="text-lightblue">cost-effective</span> method!
      </p>

      {/* Sections */}
      {[{
        step: "1. Platform",
        desc: "Baseline components and system foundations that support the entire infrastructure.",
      }, {
        step: "2. MVP",
        desc: "Product customization with additional components to serve your 'specific' needs.",
      }, {
        step: "3. PMF",
        desc: "Finished product with the right strategies to ensure its success in the target market.",
      }].map(({ step, desc }, i) => (
        <div key={i} className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="w-full md:w-[30%]">
            <h2 className="text-[32px] md:text-[50px] font-semibold text-left text-greyshade mb-4">
              {step}
            </h2>
            <p className="text-[18px] md:text-[22px] text-justify text-greyshade md:pl-8">
              {desc}
            </p>
          </div>

          {/* Divider */}
          <div
            className="hidden md:block h-40 w-0 border-l-2 border-black ml-4"
            style={{
              borderImage:
                'linear-gradient(270deg, rgba(0, 0, 0, 0) 3.14%, #000000 51.22%, rgba(0, 0, 0, 0) 90.98%) 1',
              borderImageSlice: 1,
            }}
          ></div>

          {/* Image */}
          <div className="w-full md:w-[70%] flex justify-center">
            <img
              src="pmf_car.svg"
              alt="Platform"
              className="w-[80%] md:w-[40%] h-auto object-contain"
            />
          </div>
        </div>
      ))}

      {/* Value Points Section */}
      <div className="w-full space-y-16">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Box 1 */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-[26px] md:text-[35px] font-semibold text-lightblue mb-2">
              Aligned Interests:
            </h3>
            <p className="text-[16px] md:text-[20px] text-greyshade">
Modern applications aren’t built once and are complete. They are living solutions that require constant updating to meet rapidly changing customer needs. Our business model centers on building long-term relationships where we only get paid for delivering lasting value yearly. We do not charge by the hour or get paid to fix bugs.

            </p>
          </div>

          {/* Box 2 */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-[26px] md:text-[35px] font-semibold text-lightblue mb-2">
              Change Management:
            </h3>
            <p className="text-[16px] md:text-[20px] text-greyshade">
              Creating a solution is not enough. TecHubble brings all stakeholders on board 
              — from managers to frontline users — ensuring enthusiasm and adoption across the board.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Box 3 */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-[26px] md:text-[35px] font-semibold text-lightblue mb-2">
              Flexibility:
            </h3>
            <p className="text-[16px] md:text-[20px] text-greyshade">
Creating a solution is not enough. It needs to be used enthusiastically throughout the organization. TecHubble includes critical stakeholders in the development process, from management to line employees, to ensure they are delighted by the final result and become enthusiastic users and evangelists.            </p>
          </div>

          {/* Box 4 */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-[26px] md:text-[35px] font-semibold text-lightblue mb-2">
              Approach:
            </h3>
            <p className="text-[16px] md:text-[20px] text-greyshade">
Our unique processes allow our clientele to deploy their product and generate value 4x faster. In addition, they aid in creating data assets that you can monetize, scale up to meet demand, and ensure you are future-proofed against changing technology & security risks.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howework;
