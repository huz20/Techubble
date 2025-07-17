// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// function Header_section() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Main Container */}
//       <div className="relative h-screen overflow-hidden">
//         {/* Background Gradients */}
//         <div className="absolute z-[-1] rounded-[20px] sm:hidden w-full h-full top-0 left-0 bg-gradient-to-r from-[rgba(44,182,219,0.49)] to-[#20A1A3]" />
//         <div
//           className="absolute z-[-1] rounded-[50px] hidden sm:block transition-all duration-300"
//           style={{
//             width: "130vw",
//             height: "100vh",
//             top: "-350px",
//             left: "0",
//             transform: "rotate(173deg)",
//             background:
//               "linear-gradient(90deg, #20A1A3 5.19%, rgba(44, 182, 219, 0.49) 99.08%)",
//           }}
//         />

//         {/* NAVIGATION */}
//         <nav className="relative z-10">
//           <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
//             <div className="flex items-center justify-between">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <div className="text-left">
//                   <h1 className="text-blue-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Poppins] font-extrabold leading-tight">
//                     TecHubble
//                   </h1>
//                   <p className="text-black font-light text-xs sm:text-sm mt-1 ml-1">
//                     Private Limited
//                   </p>
//                 </div>
//               </div>

//               {/* Desktop Navigation */}
//               <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
//                 {["HOME", "SOLUTIONS", "COMPANY", "RESOURCES"].map((item) => (
//                   <div
//                     key={item}
//                     className="font-montserrat font-semibold text-sm xl:text-base 2xl:text-lg uppercase cursor-pointer text-white hover:text-blue-200 transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//                 <button className="text-blue-600 font-semibold text-sm xl:text-base 2xl:text-lg px-4 xl:px-6 py-2 xl:py-3 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105">
//                   CONTACT US
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="lg:hidden">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="p-2 rounded-lg text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
//                   aria-label="Toggle menu"
//                 >
//                   {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             <div
//               className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//                 isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
//               }`}
//             >
//               <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
//                 {["HOME", "SOLUTIONS", "COMPANY", "RESOURCES"].map((item) => (
//                   <div
//                     key={item}
//                     className="font-montserrat font-semibold text-lg sm:text-xl uppercase cursor-pointer text-black hover:text-blue-200 py-3 border-b border-white border-opacity-20"
//                   >
//                     {item}
//                   </div>
//                 ))}
//                 <button className="w-full text-blue-600 font-semibold text-lg sm:text-xl px-6 py-4 rounded-xl shadow-lg bg-gray-100 uppercase hover:bg-white hover:shadow-xl transition-all duration-200 transform hover:scale-105 mt-6">
//                   CONTACT US
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>{/* 👇 BELOW LOGO – FLEX CONTAINER FOR ONE BOX */}
// <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
//   <div className="flex justify-start">
//     <div className="text-left space-y-6 w-full max-w-4xl">
    
//   <h2 className="font-montserrat font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-headertext ">
//     Next Gen Software <br /> Services to <br /> Businesses
//   </h2>
// <p className="font-montserrat font-normal text-[24px] leading-[133%] tracking-[0%] opacity-80 max-w-2xl">
//   Amet minim mollit non deserunt ullamco<br/> est sit aliqua dolor do amet sint. Velit<br/> officia consequat duis enim velit mollit.
// </p>

// <button className="font-montserrat bg-lightblue text-white text-sm px-6 py-3 rounded-4xl transition flex items-center gap-2">
//   Get Started <img src="arrow_right_white.svg" alt="arrow" />
// </button>

//       <div className="flex items-center gap-2 pt-4 pl-4">
//         <img src="/twitter.svg" alt="icon 1" className="w-8 h-8" />
//         <img src="/facebook.svg" alt="icon 2" className="w-8 h-8" />
//         <img src="/instagram.svg" alt="icon 3" className="w-6 h-6" />
//       </div>
//     </div>
//   </div>
// </div>

//         {/* 🔼 END INFO COLUMNS */}
//       </div>
//     </>
//   );
// }

// export default Header_section;



import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'; // import Link at the top

function Header_section() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen-max sm:h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-hidden">
      {/* 🔽 Mobile Gradient Background */}
      <div className="absolute z-[-1] sm:hidden w-full h-[700px] top-0 left-0" style={{ background: "linear-gradient(90deg, #2CB6DB7D 0%, #20A1A3 100%)" }} />

      {/* 🔽 Desktop Gradient Background */}
      <div
        className="absolute z-[-1] hidden sm:block lg:hidden transition-all duration-300"
        style={{
          width: "130vw",
          height: "100vh",
          top: "-380px",
          left: "0",
          transform: "rotate(173deg)",
          background:
            "linear-gradient(90deg, #20A1A3 5.19%, rgba(44, 182, 219, 0.49) 99.08%)",
          borderRadius: "50px",
        }}
      />

      {/* NAVIGATION */}
      <nav className="relative z-10 w-full">
        <div className="flex w-full px-4 sm:px-6 lg:px- xl:px-12 py-6 items-center justify-between">
          {/* Logo Area */}
<div className="flex items-center justify-start ml-4 sm:ml-10 md:ml-20 lg:ml-40 xl:ml-60">
            <div className="text-left">
              <h1 className="text-blue-500 text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-[Poppins] font-extrabold leading-tight">
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
          className="font-montserrat font-semibold text-sm xl:text-base text-lg:text-base uppercase cursor-pointer hover:text-blue-500 transition"
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

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="bg-white bg-opacity-15 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white border-opacity-20">
            {[
              "HOME",
              "SOLUTIONS",
              "COMPANY",
              "RESOURCES"
            ].map((item) => (
              <div
                key={item}
                className="font-montserrat font-semibold text-lg sm:text-xl uppercase cursor-pointer text-black hover:text-blue-200 py-3 border-b border-white border-opacity-20"
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

      {/* Main Heading & Content */}
<div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-12 ml-4 sm:ml-10 md:ml-20 lg:ml-40 xl:ml-60">
        <div className="flex justify-start ">
          <div className="text-left space-y-6 w-full max-w-4xl">
            <h2 className="font-montserrat font-semibold text-4xl sm:text-4xl lg:text-4xl leading-tight text-headertext ">
              Next Gen Software <br /> Services to <br /> Businesses
            </h2>
            <p className="font-montserrat font-normal text-[24px] leading-[133%] tracking-[0%] opacity-80 max-w-2xl">
              Amet minim mollit non deserunt ullamco<br /> est sit aliqua dolor do amet sint. Velit<br /> officia consequat duis enim velit mollit.
            </p>

            <button className="font-montserrat bg-lightblue text-white text-sm px-6 py-3 rounded-4xl transition flex items-center gap-2">
              Get Started <img src="arrow_right_white.svg" alt="arrow" />
            </button>

            <div className="flex items-center gap-2 pt-4 pl-4">
              <img src="/twitter.svg" alt="icon 1" className="w-8 h-8" />
              <img src="/facebook.svg" alt="icon 2" className="w-8 h-8" />
              <img src="/instagram.svg" alt="icon 3" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_section;
