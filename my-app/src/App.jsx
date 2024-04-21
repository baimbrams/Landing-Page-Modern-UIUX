import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <>
      <div className="pt-[76px] lg:pt-[5.5rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
