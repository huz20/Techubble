function Clients() {
  return (
    <div className="bg">
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10">
      {/* Title */}
<h1 className="font-montserrat font-semibold text-[40px] sm:text-[60px] md:text-[80px] leading-[50px] text-center text-lightblue mb-8 py-16">
  Clients
</h1>


      <div className="flex flex-col sm:flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 w-full">
        
        {/* Card One */}
        <div className="flex flex-col w-full sm:w-3/4 md:w-2/5 lg:w-1/5 bg-white drop-shadow-xl rounded-4xl p-6 ">
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-3xl font-semibold font-montserrat">Net Zero Compass</h2>
            <div className="w-30 h-30 flex items-center justify-center">
              <img src="north.png" alt="Net Zero Logo" className="w-30 h-30 object-contain" />
            </div>
          </div>
          <div className="font-montserrat text-greyshade text-base sm:text-lg md:text-2xl p-2 py-10  text-justify">
            ERM—Environmental Resources Management, owned and operated by KKR, is a sustainable management consultancy. ERM helps global leaders with compliance and sustainability of their enterprises. As part of the Paris Agreement initiative, ERM supports industries in evaluating practices and reducing carbon emissions.
          </div>
        </div>

        {/* Card Two */}
        <div className="flex flex-col w-full sm:w-3/4 md:w-2/5 lg:w-1/5 bg-white drop-shadow-xl rounded-4xl p-6">
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-3xl font-semibold font-montserrat">ERM Assess
            </h2>
            <div className="w-30 h-30 flex items-center justify-center">
              <img src="erm.png" alt="Net Zero Logo" className="w-30 h-30 object-contain" />
            </div>
          </div>
          <div className="font-montserrat text-greyshade text-base sm:text-lg md:text-2xl p-2 py-10 text-justify">
            ERM—Environmental Resources Management, owned and operated by KKR, is a sustainable management consultancy. ERM helps global leaders with compliance and sustainability of their enterprises. As part of the Paris Agreement initiative, ERM supports industries in evaluating practices and reducing carbon emissions.
          </div>
        </div>

        {/* Card Three */}
        <div className="flex flex-col w-full sm:w-3/4 md:w-2/5 lg:w-1/5 bg-white drop-shadow-xl rounded-4xl p-6">
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-3xl font-semibold font-montserrat">Refinitiv</h2>
            <div className="w-30 h-30 flex items-center justify-center">
              <img src="refinitive.png" alt="Net Zero Logo" className="w-30 h-30 object-contain" />
            </div>
          </div>
          <div className="font-montserrat text-greyshade text-base sm:text-lg md:text-2xl p-2 py-10 text-justify">
            ERM—Environmental Resources Management, owned and operated by KKR, is a sustainable management consultancy. ERM helps global leaders with compliance and sustainability of their enterprises. As part of the Paris Agreement initiative, ERM supports industries in evaluating practices and reducing carbon emissions.
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default Clients;
