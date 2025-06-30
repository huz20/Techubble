function WhyUs() {
  return (
    <section className="text-center px-4 py-20">
      {/* Heading */}
      <div className="text-[36px] sm:text-[48px] md:text-[60px] font-bold mb-40 font-montserrat text-greyshade">
        <h2>Why <span className="text-lightblue">Us</span></h2>
<div
  className="w-50 h-[2px] sm:w-100 md:w-200 md:h-[2px] mx-auto rounded-full mt-10"
  style={{
    border: '1px solid',
    borderImageSource:
      'linear-gradient(270deg, rgba(44, 182, 219, 0) 1.56%, #2CB6DB 51.4%, rgba(44, 182, 219, 0) 102.19%)',
    borderImageSlice: 1,
    boxShadow: '0px 4px 10px 0px #20A1A380',
    background: 'bg-lightblue',
    textShadow: '0px 4px 10px 0px #20A1A380',
  }}
></div>

      </div>


      {/* First Row - Larger Boxes */}
      <div className="flex flex-wrap justify-center sm:gap-8 mb-10 text-[#616161]">
        {[
          { number: '100', symbol: '+', sub: 'Satisfied Customers', text: 'Trusted by clients around the globe.' },
          { number: '99', symbol: '%', sub: 'Success Rate', text: 'Delivering excellence every time.' },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[260px] md:w-[300px] flex flex-col items-center justify-center  "
          >
            <div className="flex items-start justify-center">
              <span className="text-[64px] sm:text-[75px] md:text-[85px] font-bold leading-none">{item.number}</span>
              <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold mt-[10px] ml-[4px]">{item.symbol}</span>
            </div>
            <p className="text-lg sm:text-xl font-semibold mt-2">{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Second Row - Smaller Boxes */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-20 mb-8 leading-[200%] pt-20">
        {[
          { heading: 'Evolving', sub: 'Everyday' },
          { heading: 'Versatile', sub: 'Team' },
          { heading: 'Intelligent', sub: 'Analytics' },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[160px] sm:w-[180px] md:w-[400px] flex flex-col items-center justify-center p-4"
          >
            <h3 className="text-[32px] sm:text-[40px] md:text-[45px] font-bold text-greyshade">{item.heading}</h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mt-2 text-greyshade tracking-[0.6em]">
              {item.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Highlight Section */}
      <div className="flex flex-wrap justify-center gap-12 sm:gap-6 md:gap-10 leading-[200%]">
        {[
          { heading: 'Successful', sub: 'Testing' },
          { heading: 'Scalable', sub: 'Product' },
          { heading: 'Faster', sub: 'Delivery' },
        ].map((item, index) => (
          <div
            key={index}
            className="w-[160px] sm:w-[180px] md:w-[400px] flex flex-col items-center justify-center p-4"
          >
            <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-greyshade">{item.heading}</h3>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mt-2 text-greyshade tracking-[0.6em]">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
