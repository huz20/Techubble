function ContactUsForm() {
  return (
    <div className="flex flex-col items-center w-full px-4 py-12 space-y-12">
      {/* TOP FLEX ROW with HEADING + TEXT and IMAGE */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl gap-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col w-full lg:w-2/3 space-y-4">
          <h2 className="font-montserrat font-semibold text-[42px] sm:text-[60px] leading-[60px] sm:leading-[80px] text-left text-[#616161]">
            Have an idea to share?
          </h2>
          <p className="font-montserrat text-[28px] sm:text-[39px] leading-[100%] text-[#616161] text-left">
            Join us for a non-obligation consultancy<br className="hidden sm:block" /> session.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/form_image.svg"
            alt="Contact Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>

      {/* MIDDLE HEADING */}
      <h3 className="font-montserrat font-semibold text-[40px] sm:text-[60px] leading-[50px] text-center text-[#616161]">
        LET'S <span className="text-[#4BB0E6]">TALK</span>
      </h3>

      {/* FORM SECTION */}
      <form className="w-full max-w-7xl space-y-6">
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <input
            type="text"
            placeholder="First Name*"
            className="font-montserrat text-[24px] sm:text-[28.94px] leading-[150%] rounded-[60.29px] border border-[#61616145] w-full md:w-1/2 h-[77.16px] px-6 text-[#616161]"
          />
          <input
            type="text"
            placeholder="Last Name*"
            className="font-montserrat text-[24px] sm:text-[28.94px] leading-[150%] rounded-[60.29px] border border-[#61616145] w-full md:w-1/2 h-[77.16px] px-6 text-[#616161]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          className="font-montserrat text-[24px] sm:text-[28.94px] leading-[150%] rounded-[60.29px] border border-[#61616145] w-full h-[77.16px] px-6 text-[#616161]"
        />

        {/* Phone Number and Company */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <input
            type="text"
            placeholder="Phone Number*"
            className="font-montserrat text-[24px] sm:text-[28.94px] leading-[150%] rounded-[60.29px] border border-[#61616145] w-full md:w-1/2 h-[77.16px] px-6 text-[#616161]"
          />
          <input
            type="text"
            placeholder="Company*"
            className="font-montserrat text-[24px] sm:text-[28.94px] leading-[150%] rounded-[60.29px] border border-[#61616145] w-full md:w-1/2 h-[77.16px] px-6 text-[#616161]"
          />
        </div>

        {/* Dropdown and Checkbox */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
          <select className="rounded-[60.29px] text-[24px] sm:text-[28.94px] border border-[#61616145] w-full md:w-1/2 h-[77px] px-6 text-[#616161]">
            <option>How did you hear about us?</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Referral</option>
            <option>Other</option>
          </select>
          <label className="font-montserrat font-normal text-[24px] sm:text-[28.94px] leading-[150%] text-[#616161] flex items-center gap-4">
            <input
              type="checkbox"
              className="w-[43px] h-[43px] border border-[#616161] rounded-md"
            />
            Yes, I want to subscribe to Techubble
          </label>
        </div>

        {/* Large Message Box */}
        <textarea
          placeholder="How can we help you?"
          className="w-full h-[300px] sm:h-[400px] rounded-[40px] border-[1.21px] border-[#61616145] px-6 py-4 text-[24px] sm:text-[28.94px] font-montserrat font-normal leading-[150%] text-[#616161]"
        ></textarea>

        {/* Submit Button and Note */}
        <div className="flex flex-col items-center space-y-4 pt-12">
          <button
            type="submit"
            className="font-montserrat font-bold text-[32px] sm:text-[42.19px] leading-[100%] text-center text-[#4BB0E6] bg-white px-10 sm:px-40 py-4 rounded-[60px] transition"
            style={{
              boxShadow: `
                -9.29px 9.29px 9.29px rgba(255, 255, 255, 0.2) inset,
                9.29px -9.29px 9.29px rgba(194, 194, 194, 0.2) inset,
                0px 5.06px 12.66px rgba(0, 0, 0, 0.25)
              `,
              backdropFilter: 'blur(45.52px)',
            }}
          >
            Send
          </button>
          <p className="font-montserrat font-normal text-[16px] sm:text-[18px] leading-[150%] text-[#616161] text-center align-middle max-w-md px-4">
            By clicking the button, I agree with the collection and processing
            of my personal data as described in the Privacy Policy.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
