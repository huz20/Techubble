function Leaders() {
  


  const logos = [
    "leaders_1.svg",
    "leaders_1.svg",
    "leaders_1.svg",
    "leaders_1.svg",
    "leaders_1.svg",
    "leaders_1.svg",
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center py-16 font-[Montserrat] overflow-x-auto">
      {/* Heading */}
      <h2 className="text-[36px] md:text-[60px] font-semibold text-center mb-16">
        Leaders that <span className="text-[#4BB0E6]">Trust</span><br/>us
      </h2>

      {/* Logo Row */}
      <div className="flex justify-center items-center">
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="w-[400px] h-[120px] opacity-100 object-contain"
          />
        ))}
      </div>
    </div>

  );
};
export default Leaders;
