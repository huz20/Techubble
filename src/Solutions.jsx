import QueryBlock from "./components/queryblock";
import Capabilities from "./components/solutions_capabilities";
import Solutions_header from "./components/solutions_header";
import Howework from "./components/solutions_howework";
import Leaders from "./components/solutions_leaders";
import Services from "./components/solutions_services";
import WhatWeTarget from "./components/Solutions_whatwetarget";
import WhoWeTarget from "./components/solutions_whowetarget";
import Footer from "./components/footer";


function Solutions() {
  return (
    <>
    <Solutions_header />
    <WhoWeTarget />
    <WhatWeTarget />
    <Services />
    <Howework />
    <Capabilities />
    <Leaders />
    <QueryBlock />
    <Footer />

    </>
  );
}


export default Solutions;
