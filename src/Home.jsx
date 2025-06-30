import Footer from './components/footer';
import QueryBlock from './components/queryblock';
import Clients from './components/clients';
import Locations from './components/locations';
import Solutions from './components/Solutions_home';
import Whychooseus from './components/whychooseus';
import EndToEnd from './components/endtoend';
import Homeoptions from './components/homeoptions';
import Header_section from './components/header_section'; 
import Solutions_home from './components/Solutions_home';

function Home() {
  return (
    <>


      {/* Uncomment the components below to render them */}
        <Header_section />
        <Homeoptions />
        <EndToEnd />
        <Whychooseus />
        <Solutions_home />
        <Clients />
        <Locations />
        <QueryBlock />
        <Footer />
    
    </>
  );
}


export default Home;
