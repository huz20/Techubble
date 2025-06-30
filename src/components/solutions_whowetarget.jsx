function WhoWeTarget() {
  return (
    <section className="w-full md:w-[80%] mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
      {/* Heading */}
      <h2 className="font-montserrat text-[38px] md:text-[60px] leading-[50px] font-semibold text-greyshade mb-20">
        Who We <span className="text-lightblue">Target</span>
      </h2>

      {/* Boxes */}
      <div className="flex flex-wrap justify-between gap-y-10 md:gap-y-14 gap-x-8">
        {[
          "An enterprise in need of a quick and viable solution with a deadline",
          "A startup with an exceptional idea and limited resources",
          "A businessman with little to no technology information but an idea that can make all the difference",
        ].map((text, index) => (
          <div
            key={index}
            className="flex-1 basis-full sm:basis-[48%] lg:basis-[32%] bg-white shadow-[0px_4px_15px_0px_#00000026] min-h-[360px] rounded-[20px] p-8 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-[#4BB0E6] mt-2 flex-shrink-0" />
              <p className="font-montserrat font-normal text-[18px] md:text-[22px] leading-[157%] tracking-[0.02em] text-greyshade">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoWeTarget;
