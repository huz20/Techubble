function Profile() {
  return (
    <div className="text-center px-4 py-12 sm:px-8 sm:py-20">
      {/* Heading */}
      <h2 className="font-montserrat font-semibold text-[32px] sm:text-[48px] md:text-[60px] leading-[120%] tracking-wider text-lightblue mb-6">
        Our Team
      </h2>
      <hr className="w-[80%] border-t-2 border-gray-300 mt-8 mb-12 mx-auto" />

      {/* Team Members */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-12 gap-8 flex-wrap items-center">
        {/* Member */}
        {[
          { name: "Huzaifa", role: "Marketing Head" },
          { name: "Saad Ali", role: "Marketing Head" },
          { name: "Omer A", role: "Marketing Head" },
        ].map((member, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src="linkedin.svg"
              alt={`Team Member ${i + 1}`}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
            />
            <div>
              <h3 className="font-montserrat font-semibold text-[24px] sm:text-[30px] leading-tight">
                {member.name}
              </h3>
              <p className="font-montserrat text-[14px] sm:text-[16px] tracking-widest leading-snug">
                {member.role.split(" ").join(" ")} <br />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;
