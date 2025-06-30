function Create_EngageAnalyze() {
  return (
    <div className="flex justify-center items-center py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-28 max-w-7xl w-full">
        {[
          {
            step: "Step 1",
            title: "Create",
            img: "create.svg",
            text: "Our site MOQAH.pk gives you all the tools you need to create and host virtual and on-site experiences that look awesome and put your brand center-stage.",
          },
          {
            step: "Step 2",
            title: "Engage",
            img: "engage.svg",
            text: "Cut through the yawns, grab your audience’s attention, and turn passive attendees into active ticketed clients who will then attend your event.",
          },
          {
            step: "Step 3",
            title: "Analyze",
            img: "analyze.svg",
            text: "Track the success of your events with deep insights and analytics measured across the entire attendee experience through our digital admin Dashboard.",
          },
        ].map(({ step, title, img, text }, i) => (
          <div
            key={i}
            className="flex flex-col bg-white p-6 rounded-xl items-center  w-full sm:w-80"
          >
            <img
              src={img}
              alt={title}
              className="w-[100px] h-[100px] object-contain mb-4"
            />

            <div className="text-left w-full">
              <p className="text-[18px] leading-[26px] font-normal mb-1 font-[Montserrat]">
                {step}
              </p>

              <div className="flex items-center mb-2">
                <h3 className="text-[40px] sm:text-[50px] lg:text-[59px] leading-[1.2] font-normal mr-2 font-[Montserrat]">
                  {title}
                </h3>
                <img
                  src="diagonal.svg"
                  alt="icon"
                  className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain"
                />
              </div>

              <p className="text-[15px] leading-[20.8px] font-normal font-[Montserrat]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Create_EngageAnalyze;
