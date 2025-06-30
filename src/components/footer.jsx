

function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex flex-col sm:flex-col md:flex-row p-4 sm:p-6 md:space-x-6 space-y-6 md:space-y-0">

        {/* Section 1 */}
        <div className="md:w-1/2">
          <div className=" p-4 md:items-start text-center md:text-left">
            <h1 className="text-blue-500 text-5xl font-[Poppins] font-extrabold ">TecHubble</h1> 
            <p className="leading-relaxed text-white pl-3 font-light text-xs	">
              Private Limited
            </p>
          </div>
        </div>
        
        {/* Section 2 */}
<div className="w-full md:w-1/4">
  <div className="flex flex-col space-y-4 p-18 text-left">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-[MontserratVar] font-semibold text-lightgray">
      NAVIGATION
    </h1>
    <div className="flex flex-col space-y-2 text-lightgray font-[MontserratVar]">
      <a href="#" className="text-sm sm:text-base hover:underline">Platform</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Solutions</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Company</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Resources</a>
    </div>
  </div>
</div>

{/* Section 3 */}
<div className="w-full md:w-1/4">
  <div className="flex flex-col space-y-4 p-18 text-left">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-[MontserratVar] font-semibold text-lightgray">
      SOCIAL
    </h1>
    <div className="flex flex-col space-y-2 text-lightgray font-[MontserratVar]">
      <a href="#" className="text-sm sm:text-base hover:underline">Yelp</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Facebook</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Twitter</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Instagram</a>
      <a href="#" className="text-sm sm:text-base hover:underline">Gmail</a>
    </div>
  </div>
</div>






      </div>
    </footer>
  );
}

export default Footer;
