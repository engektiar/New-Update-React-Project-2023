import Header from "./component/Header/Header";
import TopHeader from "./component/TopHeader/TopHeader";
import AboutUs from "./component/aboutUs/AboutUs";
import Banner from "./component/banner/Banner";
import "./App.css";
function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <AboutUs />
    </>
  );
}

export default App;
