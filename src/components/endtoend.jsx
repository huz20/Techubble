function EndToEnd() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-20 py-18 bg-greyshade space-y-18">
      
      {/* Title */}
      <h1 className="font-montserrat text-lightblue font-semibold text-[32px] sm:text-[40px] md:text-[64px] lg:text-[80px] leading-[100%]">
        End-To-End Development Services
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

      {/* Image */}
      <div>
        <img src="endtoend.png" alt="End-to-End Services" className="w-full max-w-md sm:max-w-lg md:max-w-xl" />
      </div>

    </div>
  );
}

export default EndToEnd;
