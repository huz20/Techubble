function Company_whatwevalue() {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Centered Heading */}
      <h2 className="text-center font-montserrat font-medium text-[36px] sm:text-[48px] md:text-[60px] leading-[50px] pb-20">
        What We <span className="text-lightblue">Value</span>
      </h2>

      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {[
          'Impact over everything else',
          'Innovative & sustainable growth',
          'End-user focus',
          'Ownership and trust',
          'Respect as the basis'
        ].map((text, index) => (
<div
  key={index}
  style={{ border: '0.5px solid #616161' }}
  className="w-[242px] h-[160px] rounded-[5px] flex items-center justify-center px-2 text-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
>
  <h1 className="font-montserrat font-medium text-[30px] leading-[100%] text-[#616161]">
    {text}
  </h1>
</div>

        ))}
      </div>

      {/* Paragraph below aligned to same width */}
<div className="mt-10 max-w-[1350px] px-4">
  <p className="font-montserrat font-light text-[25px] leading-[100%] text-justify text-[#616161]">
    Keep it simple. We thrive on breaking down complex problems into more specific and manageable components. Every system tends towards complexity, slowness, and difficulty. Knowing complexity is unavoidable, we use clear and level-headed thinking to reduce conflict and confusion. We spend a lot of time and energy building sound solutions. Keeping a product simple, while fast and easy-to-use is a battle that must be fought every day. This keeps us from being reactive and impulsive and allows us to deliver quality solutions that work. We stay focused on the end user.
  </p>
</div>

    </div>
  );
}

export default Company_whatwevalue;
