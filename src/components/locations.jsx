function Locations() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-10 py-20">
      
      {/* Title */}
      <h1 className="font-montserrat font-semibold text-[40px] sm:text-[60px] md:text-[80px] leading-[50px] text-center text-lightblue mb-20">
        LOCATIONS
      </h1>

      {/* Content Grid */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-center items-start gap-8 px-4">
        
        {/* Islamabad Info */}
        <div className="flex flex-col w-full md:w-1/2 bg-white p-6 text-left">
          <hr className="border-t-2 border-greyshade w-full mb-4" />
          
          <h2 className="text-2xl sm:text-3xl font-semibold font-montserrat text-lightblue mb-2">
            Islamabad, Pakistan
          </h2>

          <p className="text-greyshade mb-1 font-thin font-montserrat">
            Jinnah Super Market F7 Markaz, Islamabad
          </p>

          <p className="text-greyshade font-light font-montserrat">
            The capital city of Pakistan.
          </p>
        </div>

        {/* Map Image */}
        <div className="w-full md:w-1/2">
          <img src="Map.png" alt="map" className="w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}

export default Locations;
