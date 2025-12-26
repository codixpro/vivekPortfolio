
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Navbar from "./components/Navbar";
import Filter from "./sections/Filter";

const App = () => {


  return (
    // <div>
    //   <Filter />
    // </div>
    <div className="relative bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.03),transparent_70%),linear-gradient(135deg,#1B1B1B_0%,#0F0F0F_100%)] min-h-screen w-full overflow-hidden">




      {/* <video src={bg2} autoPlay loop muted className="fixed top-0 left-0 w-full h-screen object-cover z-0 opacity-30"></video> */}


      {/* Page Content */}
      <div className="relative z-10">

        <Navbar/>
        <Home />
        <section id="skills" className="p-6 bg-black text-white" >
          <Filter />
        </section>

      </div>

    </div>
  );
};

export default App;
