function LookingToHire() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 md:py-16 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-[592px] h-[400px] md:h-[730px] rounded-t-[30px] md:rounded-l-[50px] md:rounded-tr-none overflow-hidden">
        <img
          src="lookingtohire.svg"
          alt="Feature"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Text Container */}
      <div className="w-full md:w-[729px] h-auto md:h-[730px] bg-lightblue rounded-b-[30px] md:rounded-br-[50px] md:rounded-bl-[50px] p-6 sm:p-10 md:p-16 flex flex-col justify-center items-center">
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-center mb-3 text-white">
          Looking to Hire Us?
        </h2>
        <h3 className="text-[24px] sm:text-[30px] md:text-[40px] font-medium text-center mb-5 text-white">
          Here is what we can do for you!
        </h3>
        <p className="text-white text-[16px] sm:text-[20px] md:text-[25px] font-light leading-snug text-justify px-2 sm:px-5 mb-6 font-montserrat">
          We believe in combining artificial and human intelligence to give your product the boost that it requires to launch and create an impact.
        </p>

        {/* Button */}
        <button className="bg-white rounded-[24px] px-6 py-4 flex items-center justify-center">
          <img
            src="/looking_to_hire_us_arrow.svg"
            alt="arrow"
            className="w-[40px] sm:w-[50px] md:w-[60px] h-auto"
          />
        </button>
      </div>
    </div>
  );
}

export default LookingToHire;
