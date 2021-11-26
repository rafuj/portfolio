import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import "./assets/css/main.css";
import Body from "./components/Body";
import Clients from "./components/Clients";
import HeroSection from "./components/HeroSection";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Sponsor from "./components/Sponsor";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route
          path="/clients"
          element={
            <>
              <HeroSection title="My Clients Say"></HeroSection>
              <Clients></Clients>
              <Sponsor></Sponsor>
            </>
          }
        ></Route>
        <Route
          path="/project"
          element={
            <>
              <HeroSection
                title="My Latest Projects
              "
              ></HeroSection>
              <Projects bg="bg--body"></Projects>
              <Sponsor></Sponsor>
            </>
          }
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
