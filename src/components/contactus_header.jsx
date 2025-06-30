import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'; // import Link at the top

function Contactus_header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-auto sm:h-[80vh] md:h-[460px] overflow-hidden">
      {/* 🔽 Mobile Gradient Background */}
      <div className="absolute z-[-1] sm:hidden w-full h-[200px] top-0 left-0" style={{ background: "linear-gradient(90deg, #2CB6DB7D 0%, #20A1A3 100%)" }} />

      {/* 🔽 Desktop Gradient Background */}
      <div
        className="absolute z-[-1] hidden sm:block transition-all duration-300"
        style={{
          width: "130vw",
          height: "60vh",
          top: "-350px",
          left: "-30px",
          transform: "rotate(173deg)",
          background:
            "linear-gradient(90deg, #20A1A3 5.19%, rgba(44, 182, 219, 0.49) 99.08%)",
          borderRadius: "50px",
        }}
      />

      <nav className="relative z-10 w-full">
        <div className="w-full px-6 sm:px-10 md:px-20 lg:px-32 xl:px-72 py-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-left">
              <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Poppins] font-extrabold leading-tight">
                TecHubble
              </h1>
              <p className="text-black font-light text-xs sm:text-sm mt-1 ml-1">
                Private Limited
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
            {["HOME", "SOLUTIONS", "COMPANY", "RESOURCES"].map((item) => (
              <div
                key={item}
                className="font-montserrat font-semibold text-lg sm:text-xl uppercase cursor-pointer hover:text-blue-200 py-3 border-b border-white border-opacity-20"
              >
                {item}
              </div>
            ))}
            <button className="w-full text-blue-600 font-semibold text-lg sm:text-xl px-6 py-4 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105 mt-6">
              CONTACT US
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Contactus_header;
