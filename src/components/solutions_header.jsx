import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'; // import Link at the top

function Solutions_header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="relative h-screen-max sm:h-[80vh] overflow-hidden">
      {/* 🔽 Mobile Gradient Background */}
      <div
        className="absolute z-[-1] sm:hidden w-full h-[600px] top-0 left-0"
        style={{
          background: "linear-gradient(90deg, #2CB6DB7D 0%, #20A1A3 100%)"
        }}
      />
      <div
        className="absolute z-[-1] hidden sm:block transition-all duration-300"
        style={{
          width: "130vw",
          height: "80vh",
          top: "-300px",
          left: "-30px",
          transform: "rotate(173deg)",
          background:
            "linear-gradient(90deg, #20A1A3 5.19%, rgba(44, 182, 219, 0.49) 99.08%)",
          borderRadius: "50px",
        }}
      />

      {/* 🔼 Navigation */}
      <nav className="relative z-10 w-full">
        <div className="flex flex-wrap items-center justify-between w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          {/* 🔹 Logo */}
          <div className="flex flex-col items-start justify-start ml-0 sm:ml-0 lg:ml-40">
            <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Poppins] font-extrabold leading-tight">
              TecHubble
            </h1>
            <p className="text-black font-light text-xs sm:text-sm mt-1">
              Private Limited
            </p>
          </div>

          {/* 🔹 Desktop Navigation */}
 {/* 🔹 Desktop Navigation */}
<div className="hidden lg:flex items-center gap-6 xl:gap-12 text-white mr-40">
      {[
        { label: "HOME", path: "/" },
        { label: "SOLUTIONS", path: "/solutions" },
        { label: "COMPANY", path: "/company" },
        { label: "RESOURCES", path: "/resources" },
      ].map((item) => (
        <Link
          to={item.path}
          key={item.label}
          className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer hover:text-blue-500 transition"
        >
          {item.label}
        </Link>
      ))}

      <Link
        to="/contact"
        className="text-blue-600 font-semibold text-sm xl:text-base 2xl:text-lg px-4 xl:px-6 py-2 xl:py-3 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        CONTACT US
      </Link>
    </div>

          {/* 🔹 Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white text-white border-opacity-20">
            {["HOME", "SOLUTIONS", "COMPANY", "RESOURCES"].map((item) => (
              <div
                key={item}
                className="font-montserrat font-semibold text-base uppercase cursor-pointer text-black hover:text-blue-200 py-3 border-b border-white border-opacity-20"
              >
                {item}
              </div>
            ))}
            <button className="w-full text-blue-600 font-semibold text-base px-6 py-4 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105 mt-6">
              CONTACT US
            </button>
          </div>
        </div>
      </nav>

      {/* 🔼 Main Heading & Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 xl:gap-28">
          {/* 🔹 Text Column */}
          <div className="w-full lg:w-1/2 text-left space-y-6 lg:ml-30">
<h2 className="font-montserrat font-bold text-[80px] leading-[50px] text-white">
  What We Do
</h2>

<div></div>
<p className="w-[400px] font-montserrat font-medium text-[30px] leading-[100%] text-white my-4 ml-12 py-6 ">
  TecHubble offers complete product solutions from idea to launch, all within a timeframe of three months.
</p>
            {/* 🔹 CTA Button - Responsive */}
<button
  className="
    flex items-center justify-center gap-2 
    bg-white text-lightblue 
    transition-all duration-200 
    font-[Montserrat] font-medium 
    text-[16px] sm:text-[23.84px] 
    w-[120px] sm:w-[160px] 
    h-[32px] sm:h-[50px] 
    rounded-[14px] 
    shadow-[0px_4px_10px_0px_#00000040]
    
  "
>
  Let's Talk
</button>
          </div>

          {/* 🔹 Image Column – hidden on mobile */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center">
            <img
              src="solutions_page_header.svg"
              alt="company"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions_header;
